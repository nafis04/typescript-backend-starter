import { Queue } from 'bullmq';
import { redisConfig } from '../config/redis';

export const reportQueue = new Queue('report-processing', {
  connection: redisConfig,
});
