import { Request, Response } from "express";

import { AuthService } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const result = await AuthService.register(req.body);

  res.status(201).json({
    success: true,
    data: result,
  });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const result = await AuthService.login(req.body);

  res.json({
    success: true,
    data: result,
  });
};
