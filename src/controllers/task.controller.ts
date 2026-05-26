import { Request, Response } from "express";

import { TaskService } from "../services/task.service";

import { CreateTaskDto } from "../dto/create-task.dto";

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  const tasks = await TaskService.getAllTasks(req.user!.userId, req.query);

  res.json({
    success: true,
    data: tasks,
  });
};

export const getTaskById = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  const task = await TaskService.getTaskById(req.params.id, req.user!.userId);

  res.json({
    success: true,
    data: task,
  });
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const body: CreateTaskDto = req.body;

  const newTask = await TaskService.createTask(req.user!.userId, body);

  res.status(201).json({
    success: true,
    data: newTask,
  });
};
