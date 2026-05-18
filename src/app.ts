import express from "express";
import taskRoutes from "./routes/task.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Routes
app.use("/tasks", taskRoutes);
// Error handling middleware
app.use(errorHandler);

export default app;
