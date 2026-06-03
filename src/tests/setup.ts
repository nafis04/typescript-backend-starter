import { reportQueue } from '../queues/report.queue';

afterAll(async () => {
  await reportQueue.close();
});
