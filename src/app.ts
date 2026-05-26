import express from "express";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";
import { errorHandler } from "./middleware/error.middleware";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

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

// Routes
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
