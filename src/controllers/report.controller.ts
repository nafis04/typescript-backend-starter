import { Request, Response } from 'express';

import { ReportService } from '../services/report.service';

export const generateReport = async (req: Request, res: Response) => {
  const result = await ReportService.generateReport();

  res.status(202).json({
    success: true,
    data: result,
  });
};

export const getJobStatus = async (
  req: Request<{ jobId: string }>,
  res: Response
) => {
  const result = await ReportService.getJobStatus(req.params.jobId);

  res.json({
    success: true,
    data: result,
  });
};
