import Express from 'express';
import { body } from 'express-validator';

import Events from '../controller/events-controller.js';
import adminRoutes from '../routes/admin-routes.js';
import validationErrorEvent from '../middlewares/validationError.event.js';
import tryCatch from '../utils/try-catch.event.js';
import eventAccessEnied from '../middlewares/event.access-enied.js';
import validationErrorCard from '../middlewares/validationError.event-card.js';

const router = Express.Router();

router.get(
  adminRoutes.eventsGetPath(),
  tryCatch(Events.getAllEvents),
  Events.getAllEvents
);

router.get(
  adminRoutes.eventIdGetPath(),
  tryCatch(Events.getEventsById),
  Events.getEventsById
);

router.get(
  adminRoutes.eventAllUsersSellTicketByEventId(),
  tryCatch(Events.getAllUsersSellTicketByEventId),
  Events.getAllUsersSellTicketByEventId
);

router.get(
  adminRoutes.eventTicketsGetPath(),
  tryCatch(Events.getAllEventTickets),
  Events.getAllEventTickets
);

router.get(
  adminRoutes.eventCategoriesGetPath(),
  tryCatch(Events.getAllCategoriesByEventId),
  Events.getAllCategoriesByEventId
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

router.patch(
  adminRoutes.eventIdUpdatePath(),
  body('title').notEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('description').notEmpty().isLength({ min: 10, max: 150 }).trim(),
  body('city').notEmpty().isLength({ min: 2, max: 30 }).trim(),
  body('address').notEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('eventStart').notEmpty().trim(),
  body('eventEnd').notEmpty().trim(),
  validationErrorEvent,
  eventAccessEnied,
  tryCatch(Events.updateEvent),
  Events.updateEvent
);

router.get(
  adminRoutes.eventGetAllComments(),
  tryCatch(Events.getAllComments),
  Events.getAllComments
);

router.post(
  adminRoutes.eventCreateCommentPath(),
  body('content').not().isEmpty().escape().trim(),
  tryCatch(Events.createComment)
);

router.post(
  adminRoutes.eventSellTicketPath(),
  validationErrorCard,
  tryCatch(Events.payTicketEvent),
  Events.payTicketEvent
);

router.delete(
  adminRoutes.eventIdDeletePath(),
  eventAccessEnied,
  tryCatch(Events.deleteEvent)
);

export default router;
