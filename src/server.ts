import express, { Request, Response } from "express";
import dotenv from "dotenv";
import app from "./app";

// Load environment variables from .env file
dotenv.config();

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
