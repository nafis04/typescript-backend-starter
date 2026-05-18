import { Request, Response } from "express";
import { Task } from "../interfaces/task.interface";
import { tasks } from "../data/tasks";
import { CreateTaskDto } from "../dto/create-task.dto";

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

export const createTask = (req: Request, res: Response): void => {
  const body: CreateTaskDto = req.body;

  const newTask: Task = {
    id: tasks.length + 1,
    title: body.title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    data: newTask,
  });
};
