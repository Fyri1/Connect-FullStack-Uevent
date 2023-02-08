import Express from 'express';
import { body } from 'express-validator';
import Comments from '../controller/comments-controller.js';
import validationCotegories from '../middlewares/validationError.category.js';
import tryCatch from '../utils/try-catch.event.js';
import adminRoutes from '../routes/admin-routes.js';

const router = Express.Router();

router.get('/comments/:id', tryCatch(Comments.getCommentById));
router.patch('/comments/:id/', tryCatch(Comments.updateCommentData));
router.delete('/comments/:id/', tryCatch(Comments.deleteComment));

export default router;
