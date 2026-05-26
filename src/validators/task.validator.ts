import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title cannot exceed 100 characters'),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;

export const taskQuerySchema = z.object({
  page: z.string().optional(),

  limit: z.string().optional(),

  completed: z.enum(['true', 'false']).optional(),
});

export type TaskQueryInput = z.infer<typeof taskQuerySchema>;
