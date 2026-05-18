import express from "express";
import { validateTask } from "../middleware/validate-task.middleware";
import {
  getAllTasks,
  getTaskById,
  createTask,
} from "../controllers/task.controller";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", validateTask, createTask);

router.get("/:id", getTaskById);

export default router;
