import { v4 as uuidv4 } from "uuid";

import { tasks } from "../data/tasks";

import { Task } from "../interfaces/task.interface";

import { CreateTaskDto } from "../dto/create-task.dto";

import { AppError } from "../errors/app-error";

export class TaskService {
  static getAllTasks(): Task[] {
    return tasks;
  }

  static getTaskById(id: string): Task {
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    return task;
  }

  static createTask(body: CreateTaskDto): Task {
    const newTask: Task = {
      id: uuidv4(),
      title: body.title,
      completed: false,
    };

    tasks.push(newTask);

    return newTask;
  }
}
