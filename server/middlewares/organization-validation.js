import User from '../models/User.js';
import ApiError from '../exceptions/api-error.js';
import { validationResult } from 'express-validator';

export default async (req, _res, next) => {
  const { name } = req.body;
  const errors = validationResult(req);
  if (await User.isEqualNameOrganization(name)) {
    errors.errors.push({
      value: name,
      msg: 'Already exist',
      param: 'name',
      location: 'body',
    });
  }
  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest('Validation error', errors.array()));
  }
  next();
};
