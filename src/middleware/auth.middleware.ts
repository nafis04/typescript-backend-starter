import { Request, Response, NextFunction } from 'express';

import { AppError } from '../errors/app-error';

import { verifyToken } from '../utils/verify-token';

export const protect = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    next(new AppError('Unauthorized', 401));

    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);

    req.user = {
      userId: decoded.userId,
    };

    next();
  } catch (_error) {
    next(new AppError('Invalid token', 401));
  }
};
