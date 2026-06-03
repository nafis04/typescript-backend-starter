import { Worker } from 'bullmq';
import { logger } from '../utils/logger';
import { redisConfig } from '../config/redis';

const worker = new Worker(
  'report-processing',

  async (job) => {
    logger.info(`Processing Job ${job.id}`);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    logger.info(`Completed Job ${job.id}`);
  },

  {
    connection: redisConfig,
  }
);
