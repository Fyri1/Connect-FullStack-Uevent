import Express from 'express';
import { body } from 'express-validator';
import Organization from '../controller/organization-controller.js';
import checkOrganization from '../middlewares/check-organization.js';
import organizationValidate from '../middlewares/organization-validation.js';
import tryCatch from '../utils/try-catch.event.js';
const router = Express.Router();

// router.get('/test-qr/', Authorization.testQR);

router.post(
  '/register-organization/',
  body('name').isLength({ min: 3, max: 30 }).trim(),
  body('phone_org').isLength({ min: 4, max: 13 }).trim(),
  body('phone_staff').isLength({ min: 4, max: 13 }).trim(),
  body('address').isLength({ min: 3 }).trim(),
  body('email').isEmail().normalizeEmail().trim(),
  body('description').isLength({ min: 10, max: 150 }).trim(),
  checkOrganization,
  organizationValidate,
  tryCatch(Organization.authRegisterOrganization)
);

export default router;