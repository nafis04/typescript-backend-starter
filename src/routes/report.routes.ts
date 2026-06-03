import express from 'express';

import { generateReport, getJobStatus } from '../controllers/report.controller';

import { asyncHandler } from '../utils/async-handler';

const router = express.Router();

router.post('/', asyncHandler(generateReport));

router.get('/:jobId', asyncHandler(getJobStatus));

export default router;
