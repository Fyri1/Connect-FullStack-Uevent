import Express from 'express';
import bodyParser from 'body-parser';
import internetCard from './internet-card.js';
import SHA1 from './SHA-1.js';
const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/pay', async (req, res) => {
  try {
    const { cardNumber, CVV, date, organozationId, orderId, amount, products } =
      req.body;
    const userCard = internetCard.find(
      (item) => item.cardNumber === cardNumber
    );
    const signature = Buffer.from(
      SHA1(organozationId + orderId + Math.ceil(amount), products.name)
    ).toString('base64');

    res.json({
      state: 'SUCCESS',
      organozationId,
      orderId: `ORDER-${SHA1(orderId + Math.ceil(amount), products.name)}`,
      signature,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ massage: 'creash Ebank' });
  }
});

app.listen('8081', () => {
  console.log('Ebank lets GOOOOOOOOG - port 8081');
});
