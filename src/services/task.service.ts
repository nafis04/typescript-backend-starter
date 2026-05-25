import { prisma } from "../config/prisma";

import { CreateTaskDto } from "../dto/create-task.dto";

import { AppError } from "../errors/app-error";

export class TaskService {
  static async getAllTasks() {
    return prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async getTaskById(id: string) {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    return task;
  }

  static async createTask(body: CreateTaskDto) {
    return prisma.task.create({
      data: {
        title: body.title,
      },
    });
  }
}
