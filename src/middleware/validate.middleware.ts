import { Request, Response, NextFunction } from "express";

import { ZodType } from "zod";

export const validate = (
  schema: ZodType,
  source: "body" | "query" = "body"
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      res.status(400).json({
        success: false,
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });

      return;
    }

    Object.assign(req[source], result.data);

    next();
  };
};
