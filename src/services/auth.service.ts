import bcrypt from "bcrypt";

import { prisma } from "../config/prisma";

import { RegisterDto } from "../dto/register.dto";

import { LoginDto } from "../dto/login.dto";

import { AppError } from "../errors/app-error";

import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

import { verifyRefreshToken } from "../utils/verify-token";

export class AuthService {
  static async register(body: RegisterDto) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      throw new AppError("Email already exists", 400);
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
    });

    const accessToken = generateAccessToken(user.id);

    const refreshToken = generateRefreshToken(user.id);

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  static async login(body: LoginDto) {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
      throw new AppError("Invalid credentials", 401);
    }

    const accessToken = generateAccessToken(user.id);

    const refreshToken = generateRefreshToken(user.id);

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  static async refreshToken(refreshToken: string) {
    try {
      const decoded = verifyRefreshToken(refreshToken);

      const accessToken = generateAccessToken(decoded.userId);

      return {
        accessToken,
      };
    } catch {
      throw new AppError("Invalid refresh token", 401);
    }
  }

  static async logout() {
    return {
      message: "Logged out successfully",
    };
  }
}
