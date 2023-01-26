import Express from 'express';
import { body } from 'express-validator';

import Events from '../controller/events-controller.js';
import adminRoutes from '../routes/admin-routes.js';

const router = Express.Router();

router.get(
  adminRoutes.eventsGetPath(),
  Events.getAllEvents
);
router.post(
  adminRoutes.eventPostPath(),
  body('title').isEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('description').isEmpty().isLength({ min: 10, max: 150 }).trim(),
  body('category').isEmpty(),
  body('city').isEmpty().isLength({ min: 5, max: 30 }).trim(),
  body('address').isEmpty().isLength({ min: 10, max: 30 }).trim(),
  body('eventStart').isEmpty().trim(),
  body('eventEnd').isEmpty().trim(),
  Events.createEvent
);

export default router;
