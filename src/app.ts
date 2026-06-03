import express from 'express';
import healthRoutes from './routes/health.routes';
import authRoutes from './routes/auth.routes';
import taskRoutes from './routes/task.routes';
import reportRoutes from './routes/report.routes';
import { errorHandler } from './middleware/error.middleware';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { requestLogger } from './middleware/logger.middleware';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Security middleware
app.use(helmet());

// Enable CORS for all routes
app.use(cors());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

// Request logging middleware
app.use(requestLogger);

// Routes
app.use('/health', healthRoutes);
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/reports', reportRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
