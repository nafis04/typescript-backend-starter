import { Queue } from 'bullmq';

export const reportQueue = new Queue('report-processing', {
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6380,
  },
});
