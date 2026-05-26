import dotenv from 'dotenv-safe';
import app from './app';
import { logger } from './utils/logger';

// Load environment variables from .env file
dotenv.config();

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
