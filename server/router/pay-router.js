import Express from 'express';
import Stripe from 'stripe';
import * as dotenv from 'dotenv';
dotenv.config();

const router = Express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);
console.log(process.env.STRIPE_KEY);
router.post('/create-session-intent', async (req, res, next) => {
  const { item } = req.body;
  console.log(item);
  try {
    const sessions = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.title,
            },
            unit_amount: `${item.priceTicket}00`,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: `http://localhost:5173/event/${item.id}`,
    });
    res.json({
      url: sessions.url,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
