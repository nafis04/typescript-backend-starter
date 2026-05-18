import { Request, Response, NextFunction } from "express";

export const validateTask = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json({
      success: false,
      message: "Title is required",
    });

    return;
  }

  if (typeof title !== "string") {
    res.status(400).json({
      success: false,
      message: "Title must be a string",
    });

    return;
  }

  next();
};
