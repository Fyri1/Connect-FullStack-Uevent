import Express from 'express';
import { body } from 'express-validator';

import Events from '../controller/events-controller.js';
import adminRoutes from '../routes/admin-routes.js';
import validationErrorEvent from '../middlewares/validationError.event.js';
import tryCatch from '../utils/try-catch.event.js';

const router = Express.Router();

router.get(
  adminRoutes.eventsGetPath(),
  tryCatch(Events.getAllEvents),
  Events.getAllEvents
);

router.get(
  adminRoutes.eventTicketsGetPath(),
  tryCatch(Events.getAllEventTickets),
  Events.getAllEventTickets
);

router.post(
  adminRoutes.eventPostPath(),
  body('title').notEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('description').notEmpty().isLength({ min: 10, max: 150 }).trim(),
  body('city').notEmpty().isLength({ min: 2, max: 30 }).trim(),
  body('address').notEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('eventStart').notEmpty().trim(),
  body('eventEnd').notEmpty().trim(),
  validationErrorEvent,
  tryCatch(Events.createEvent),
  Events.createEvent
);

router.post(
  adminRoutes.eventSellTicketPath(),
  tryCatch(Events.sellTicketEvent),
  Events.sellTicketEvent
);

export default router;
