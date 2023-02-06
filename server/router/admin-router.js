import Express from 'express';
import tryCatch from '../utils/try-catch.event.js';
import User from '../controller/users-controller.js';
import { body } from 'express-validator';
import checkValidation from '../middlewares/auth-validation.js';
import adminRoutes from '../routes/admin-routes.js';
import accessDenied from '../middlewares/user.access-enied.js';
import validationErrorUser from '../middlewares/validationError.user.js';

const router = Express.Router();

// User
// console.log(adminRoutes.usersGetPath());
router.get(adminRoutes.usersGetPath(), tryCatch(User.getAllUsers));

router.get(adminRoutes.userIdGetPath(), tryCatch(User.getUserById));
router.post(
  adminRoutes.userPostPath(),
  checkValidation,
  tryCatch(User.createUser)
);

router.patch(
  adminRoutes.userIdUpdatePath(),
  body('login').isLength({ min: 3, max: 30 }).trim(),
  body('firstName').notEmpty().trim(),
  body('secondName').notEmpty().trim(),
  body('lastName').notEmpty().trim(),
  // body('phone_number').isLength({ min: 4, max: 13 }).trim(),
  accessDenied,
  validationErrorUser,
  tryCatch(User.updateUserData)
);

router.patch(
  adminRoutes.userChangePasswordPath(),
  accessDenied,
  tryCatch(User.changePassword)
);

router.patch(adminRoutes.userChangeEmailPath(), accessDenied, tryCatch(User.changeEmail));
router.delete(adminRoutes.userIdDeletePath(), accessDenied, tryCatch(User.deleteUser));

export default router;
