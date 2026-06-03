import { reportQueue } from '../queues/report.queue';

export class ReportService {
  static async generateReport() {
    const job = await reportQueue.add(
      'generate-report',
      {
        reportType: 'user-export',
        requestedAt: new Date(),
      },
      {
        attempts: 3,

        backoff: {
          type: 'exponential',
          delay: 2000,
        },
      }
    );

    return {
      jobId: job.id,
    };
  }

  static async getJobStatus(jobId: string) {
    const job = await reportQueue.getJob(jobId);

    if (!job) {
      return {
        state: 'not-found',
      };
    }

    return {
      state: await job.getState(),
    };
  }
}
