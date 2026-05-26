import express from 'express';

import {
  register,
  login,
  refreshToken,
  logout,
} from '../controllers/auth.controller';

import { asyncHandler } from '../utils/async-handler';

import { validate } from '../middleware/validate.middleware';

import {
  registerSchema,
  loginSchema,
  refreshTokenSchema,
} from '../validators/auth.validator';

const router = express.Router();

router.post('/register', validate(registerSchema), asyncHandler(register));

router.post('/login', validate(loginSchema), asyncHandler(login));

router.post(
  '/refresh-token',
  validate(refreshTokenSchema),
  asyncHandler(refreshToken)
);

router.post('/logout', asyncHandler(logout));

export default router;
