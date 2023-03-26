import Stripe from 'stripe';
import Event from '../models/Event.js';
import Organization from '../models/Organization.js';
import * as dotenv from 'dotenv';
import ApiError from '../exceptions/api-error.js';
import Ticket from '../models/Ticket.js';
dotenv.config();

class PayService {
  constructor() {}

  async getCoupons(user_id) {
    const { secret_key } = await Organization.findOrganizationByUserId(user_id);
    const stripe = new Stripe(secret_key);
    const coupons = await stripe.coupons.list();
    return coupons.data;
  }

  async getPromoCodes(user_id, couponId) {
    const { secret_key } = await Organization.findOrganizationByUserId(user_id);
    const stripe = new Stripe(secret_key);
    const promotionCodes = await stripe.promotionCodes.list();
    const filterPromotionCodes = promotionCodes.data.filter(
      (item) => item.coupon.id === couponId
    );
    if (filterPromotionCodes.length === 0) {
      throw ApiError.NotFound('net takogo coupon');
    }
    return filterPromotionCodes.map((item) => ({
      id: item.id,
      active: item.active,
      code: item.code,
      created: item.created,
      times_redeemed: item.times_redeemed,
    }));
  }

  async createSessionIntent({ id, user_id, title, description, priceTicket }) {
    const { secret_key } = await Organization.findOrganizationByUserId(user_id);
    const stripe = new Stripe(secret_key);
    const customer = await stripe.customers.create();
    const sessions = await stripe.checkout.sessions.create({
      payment_intent_data: { setup_future_usage: 'off_session' },
      customer: customer.id,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Tiket - ${title}`,
              description: description,
            },
            unit_amount: priceTicket * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      allow_promotion_codes: true,
      success_url:
        `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}&event_id=` +
        id,
      cancel_url: `http://localhost:5173/event/${id}`,
    });
    return { url: sessions.url };
  }
  async createSessionRetrive(userId, eventId, sessionId) {
    try {
      const userOrganizationId = await Event.findOne(eventId);
      const { secret_key } = await Organization.findOrganizationByUserId(
        userOrganizationId.user_id
      );
      const stripe = new Stripe(secret_key);
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const allTicketEvent = await Event.getAllTickets(eventId);
      const filterNotSoldTicket = allTicketEvent.filter((i) => !i.is_sold);
      if (filterNotSoldTicket.length === 0) {
        return 'Empty';
      }
      return await Event.sellTicket(
        userId,
        filterNotSoldTicket[0],
        session.payment_intent
      );
    } catch (err) {
      console.log(err);
      throw ApiError.BadRequest('Reject');
    }
  }

  async createCoupon(userId, { percent_off, duration_in_months }) {
    const { secret_key } = await Organization.findOrganizationByUserId(userId);
    const stripe = new Stripe(secret_key);
    await stripe.coupons.create({
      duration: 'repeating',
      percent_off,
      duration_in_months,
    });
    return 'create coupon';
  }

  async createPromoCode(userId, couponId, count) {
    const { secret_key } = await Organization.findOrganizationByUserId(userId);
    const stripe = new Stripe(secret_key);
    for (let i = 1; count >= i; i += 1) {
      await stripe.promotionCodes.create({
        coupon: couponId,
        max_redemptions: 1,
      });
    }
    return 'create promo codes';
  }

  async createRefaundPayment(ticketId, userId) {
    const ticketData = await Ticket.findOne(ticketId);
    const { user_id } = await Event.findOne(ticketData.event_id);
    const { secret_key } = await Organization.findOrganizationByUserId(user_id);
    const stripe = new Stripe(secret_key);

    await stripe.refunds.create({
      payment_intent: ticketData.payment_intent,
    });
    return await Ticket.ticketReturn(ticketId, userId);
  }

  async deleteCoupon(userId, couponId) {
    try {
      const { secret_key } = await Organization.findOrganizationByUserId(
        userId
      );
      const stripe = new Stripe(secret_key);
      const deleted = await stripe.coupons.del(couponId);
      return deleted;
    } catch (err) {
      if (err.raw.statusCode === 404) {
        throw ApiError.NotFound('bad id or yje delete');
      }
    }
  }

}

export default new PayService();
