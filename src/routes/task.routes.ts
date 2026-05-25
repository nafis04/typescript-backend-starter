import express from "express";
import { validate } from "../middleware/validate.middleware";

import {
  createTaskSchema,
  taskQuerySchema,
} from "../validators/task.validator";
import { asyncHandler } from "../utils/async-handler";
import {
  getTasks,
  getTaskById,
  createTask,
} from "../controllers/task.controller";

const router = express.Router();

router.get("/", validate(taskQuerySchema, "query"), asyncHandler(getTasks));

router.post("/", validate(createTaskSchema), asyncHandler(createTask));

router.get("/:id", asyncHandler(getTaskById));

export default router;
