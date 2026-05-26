import { prisma } from "../config/prisma";
import { CreateTaskDto } from "../dto/create-task.dto";
import { AppError } from "../errors/app-error";
import { TaskQueryInput } from "../validators/task.validator";

export class TaskService {
  static async getAllTasks(userId: string, query: TaskQueryInput) {
    const page = Number(query.page) || 1;

    const limit = Number(query.limit) || 10;

    const skip = (page - 1) * limit;

    const where = {
      userId,

      ...(query.completed
        ? {
            completed: query.completed === "true",
          }
        : {}),
    };

    return prisma.task.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async getTaskById(id: string, userId: string) {
    const task = await prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    return task;
  }

  static async createTask(userId: string, body: CreateTaskDto) {
    return prisma.task.create({
      data: {
        title: body.title,
        userId,
      },
    });
  }
}
