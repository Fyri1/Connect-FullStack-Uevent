import Stripe from 'stripe';
import Event from '../models/Event.js';
import Organization from '../models/Organization.js';
import * as dotenv from 'dotenv';
import ApiError from '../exceptions/api-error.js';
import Ticket from '../models/Ticket.js';
dotenv.config();

class PayService {
  constructor() {}

  async createSessionIntent(item) {
    const { secret_key } = await Organization.findOrganizationByUserId(
      item.user_id
    );
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
              name: `Tiket - ${item.title}`,
              description: item.description,
            },
            unit_amount: item.priceTicket * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url:
        `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}&event_id=` +
        item.id,
      cancel_url: `http://localhost:5173/event/${item.id}`,
    });
    return { url: sessions.url };
  }
  async createSessionRetrive(userId, eventId, sessionId) {
    try {
      const userOrganizationId = await Event.findOne(eventId);
      const { secret_key } = await Organization.findOrganizationByUserId(userOrganizationId.user_id);
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
}

export default new PayService();
