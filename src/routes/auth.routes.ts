import express from "express";

import { register, login } from "../controllers/auth.controller";

import { asyncHandler } from "../utils/async-handler";

import { validate } from "../middleware/validate.middleware";

import { registerSchema, loginSchema } from "../validators/auth.validator";

const router = express.Router();

router.post("/register", validate(registerSchema), asyncHandler(register));

router.post("/login", validate(loginSchema), asyncHandler(login));

export default router;
