import Express from 'express';
import { body } from 'express-validator';

import ticketsController from '../controller/tickets-controller.js';
import adminRoutes from '../routes/admin-routes.js';
import validationErrorTicket from '../middlewares/validationError.ticket.js';
import tryCatch from '../utils/try-сatch.event.js';

const router = Express.Router();

router.post(
  adminRoutes.ticketPostPath(),
  body('count').notEmpty(),
  body('price').notEmpty().trim(),
  validationErrorTicket,
  tryCatch(ticketsController.createTickets),
  ticketsController.createTickets
);

router.post(
  adminRoutes.ticketReturnPath(),
  tryCatch(ticketsController.returnTicketEvent),
  ticketsController.returnTicketEvent
);

export default router;
