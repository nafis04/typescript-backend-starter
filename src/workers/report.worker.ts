import { Worker } from 'bullmq';
import { logger } from '../utils/logger';

const worker = new Worker(
  'report-processing',

  async (job) => {
    logger.info(`Processing Job ${job.id}`);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    logger.info(`Completed Job ${job.id}`);
  },

  {
    connection: {
      host: process.env.REDIS_HOST || 'localhost',
      port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6380,
    },
  }
);
