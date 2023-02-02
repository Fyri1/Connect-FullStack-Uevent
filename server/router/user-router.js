import Express from 'express';
import { body } from 'express-validator';
import Authorization from '../controller/authentication-controller.js';
import checkValidation from '../middlewares/auth-validation.js';
import organizationValidate from '../middlewares/organization-validation.js';
const router = Express.Router();

// router.get('/test-qr/', Authorization.testQR);

router.post(
  '/register/',
  body('login').isLength({ min: 3, max: 30 }).trim(),
  body('password').isLength({ min: 6 }).trim(),
  body('passwordConfirm').isLength({ min: 6 }).trim(),
  body('email').isEmail().normalizeEmail().trim(),
  checkValidation,
  Authorization.authRegister
);

router.post(
  '/register-organization/',
  body('name').isLength({ min: 3, max: 30 }).trim(),
  body('phone_org').isLength({ min: 4, max: 13 }).trim(),
  body('phone_staff').isLength({ min: 4, max: 13 }).trim(),
  body('address').isLength({ min: 3 }).trim(),
  body('email').isEmail().normalizeEmail().trim(),
  body('description').isLength({ min: 10, max: 150 }).trim(),
  organizationValidate,
  Authorization.authRegisterOrganization
);

router.post(
  '/login/',
  body('login').isLength({ min: 3, max: 30 }).trim(),
  body('password').not().isEmpty().trim(),
  Authorization.authLogin
);

router.post('/logout/', Authorization.authLogout);

router.post(
  '/password-reset',
  body('email').isEmail().normalizeEmail().trim(),
  Authorization.authSendPasswordReset
);

router.post(
  '/password-reset/:link',
  body('resetPassword').not().isEmpty().trim(),
  body('resetConfirmPassword').not().isEmpty().trim(),
  Authorization.authPasswordReset
);

router.get('/refresh', Authorization.refreshToken);

router.get('/confirm-email/:link', Authorization.authActiveEmail);

export default router;