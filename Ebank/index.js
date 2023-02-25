import Express from 'express';
import bodyParser from 'body-parser';
import SHA1 from './SHA-1.js';
import fsp from 'fs/promises';
import path from 'path';
const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/pay', async (req, res) => {
  try {
    const { cardNumber, CVV, date, organozationId, orderId, amount, products } =
      req.body;
    const signature = Buffer.from(
      SHA1(organozationId + orderId + Math.ceil(amount), products.name)
    ).toString('base64');

    const stringifyInternetCards = await fsp.readFile(
      path.join(path.resolve(), 'Ebank', 'internet-card.json'),
      'utf-8'
    );
    const internetCards = JSON.parse(stringifyInternetCards);
    const userCard = internetCards[cardNumber];

    if (!userCard) {
      return res.status(400).json({
        state: 'FAIL',
        organozationId,
        orderId: `ORDER-${SHA1(orderId + Math.ceil(amount), products.name)}`,
        massage: 'no such card exists',
        signature,
      });
    }
    if (userCard.CVV !== Number(CVV) || userCard.expiry !== date) {
      return res.status(400).json({
        state: 'FAIL',
        organozationId,
        orderId: `ORDER-${SHA1(orderId + Math.ceil(amount), products.name)}`,
        massage: 'check your card details',
        signature,
      });
    }
    if (Number(userCard.moneyRange) < amount) {
      return res.status(400).json({
        state: 'FAIL',
        organozationId,
        orderId: `ORDER-${SHA1(orderId + Math.ceil(amount), products.name)}`,
        massage: 'Insufficient funds in your account',
        signature,
      });
    } else {
      userCard.moneyRange = `${Number(userCard.moneyRange) - amount}`;
    }

    await fsp.writeFile(
      path.join(path.resolve(), 'Ebank', 'internet-card.json'),
      JSON.stringify(
        {
          ...internetCards,
          [cardNumber]: userCard,
        },
        2,
        4
      )
    );

    await fsp.writeFile(
      path.join(path.resolve(), 'Ebank', `${orderId}.json`),
      JSON.stringify(
        {
          state: 'SOLD',
          cardNumber,
          organozationId,
          amount: Math.ceil(amount),
          signature,
        },
        2,
        4
      )
    );

    res.json({
      state: 'SUCCESS',
      organozationId,
      orderId: `ORDER-${SHA1(orderId + Math.ceil(amount), products.name)}`,
      signature,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ massage: 'crush Ebank' });
  }
});
app.post('/decline/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const fileData = await fsp.readFile(
    path.join(path.resolve(), 'Ebank', `${orderId}.json`),
    'utf-8'
  );
  const parseData = JSON.parse(fileData);
  const stringifyInternetCards = await fsp.readFile(
    path.join(path.resolve(), 'Ebank', 'internet-card.json'),
    'utf-8'
  );
  const internetCards = JSON.parse(stringifyInternetCards);
  const userCard = internetCards[parseData.cardNumber];

  if (parseData.state === 'DECLINE') {
    return res.status(400).json({
      state: 'FAIL',
      massage: 'Ticket already returned',
    });
  }

  console.log();
  await fsp.writeFile(
    path.join(path.resolve(), 'Ebank', 'internet-card.json'),
    JSON.stringify(
      {
        ...internetCards,
        [userCard.cardNumber]: {
          ...userCard,
          moneyRange: `${parseData.amount + Number(userCard.moneyRange)}`,
        },
      },
      2,
      4
    )
  );

  await fsp.writeFile(
    path.join(path.resolve(), 'Ebank', `${orderId}.json`),
    JSON.stringify({ ...parseData, state: 'DECLINE' }, 2, 4)
  );
  res.end('end');
});
app.listen('8081', () => {
  console.log('Ebank lets GOOOOOOOOG - port 8081');
});
