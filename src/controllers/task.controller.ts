import { Request, Response } from "express";
import { Task } from "../interfaces/task.interface";
import { tasks } from "../data/tasks";

// Get all tasks
export const getAllTasks = (req: Request, res: Response): void => {
  res.json({
    supercess: true,
    data: tasks,
  });
};

// Get task by ID
export const getTaskById = (req: Request, res: Response): void => {
  const taskId = Number(req.params.id);

  const task = tasks.find((task: Task) => task.id === taskId);

  if (!task) {
    res.status(404).json({
      success: false,
      message: "Task not found",
    });
    return;
  }

  res.json({
    success: true,
    data: task,
  });
};
