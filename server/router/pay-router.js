import Express from 'express';
import Pay from '../controller/pay-controller.js';
import tryCatch from '../utils/try-catch.event.js';

const router = Express.Router();
router.post('/create-session-intent', tryCatch(Pay.createSessionIntent));

router.post('/create-session-retrieve', tryCatch(Pay.createSessionRetrive));

router.post('/create-refunds-payment', tryCatch(Pay.createRefundsPayment));

export default router;
