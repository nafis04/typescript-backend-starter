import express from "express";
import { validateTask } from "../middleware/validate-task.middleware";
import { asyncHandler } from "../utils/async-handler";
import {
  getTasks,
  getTaskById,
  createTask,
} from "../controllers/task.controller";

const router = express.Router();

router.get("/", asyncHandler(getTasks));

router.post("/", validateTask, asyncHandler(createTask));

router.get("/:id", asyncHandler(getTaskById));

export default router;
