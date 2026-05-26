import pinoHttp from "pino-http";

import { randomUUID } from "crypto";

import { logger } from "../utils/logger";

export const requestLogger = pinoHttp({
  logger,

  genReqId: () => randomUUID(),

  customSuccessMessage(req, res) {
    return `${req.method} ${req.url} completed`;
  },

  customErrorMessage(req, res, error) {
    return `${req.method} ${req.url} failed`;
  },
});
