# TypeScript Backend Starter

A production-oriented backend starter project built with TypeScript, Express.js, PostgreSQL, Prisma, Redis, and BullMQ.

This project is part of my backend engineering learning journey focused on building scalable, maintainable, and production-ready backend systems.

---

## Features

### Core Backend

- Express.js REST API
- TypeScript
- Modular architecture
- Environment configuration
- Centralized error handling
- Async request handling

### Database

- PostgreSQL
- Prisma ORM
- Database migrations
- Type-safe database access

### Authentication & Security

- JWT Authentication
- Password hashing with bcrypt
- Helmet security middleware
- CORS support
- Rate limiting

### Validation

- Zod request validation
- Structured API error responses

### Logging

- Pino logger
- HTTP request logging

### Background Processing

- Redis
- BullMQ
- Background workers
- Job retries
- Job status tracking

### DevOps

- Docker
- Docker Compose
- GitHub Actions CI/CD
- ESLint
- Jest Testing

---

## Project Structure

```text
src/
│
├── config/
├── controllers/
├── middleware/
├── prisma/
├── queues/
├── routes/
├── services/
├── tests/
├── utils/
├── workers/
│
├── app.ts
└── server.ts
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd typescript-backend-starter
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=5000

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/task_management

JWT_SECRET=your-secret-key

REDIS_HOST=localhost
REDIS_PORT=6379
```

---

## Running Locally

Start API:

```bash
npm run dev
```

Start Worker:

```bash
npm run worker
```

Start Both:

```bash
npm run dev:all
```

---

## Running with Docker

```bash
docker compose up --build
```

Services:

- API
- PostgreSQL
- Redis
- BullMQ Worker

---

## Build

```bash
npm run build
```

---

## Testing

Run tests:

```bash
npm test
```

Generate coverage report:

```bash
npm run test:coverage
```

---

## API Endpoints

### Health Check

```http
GET /health
```

### Tasks

```http
GET /tasks
GET /tasks/:id
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id
```

### Reports

Create background job:

```http
POST /reports
```

Check job status:

```http
GET /reports/:jobId
```

---

## Tech Stack

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- Prisma
- Redis
- BullMQ
- JWT
- Zod
- Pino
- Docker
- GitHub Actions
- Jest
- ESLint

---

## Learning Goals

This project focuses on learning:

- Backend Architecture
- TypeScript
- REST API Design
- Authentication
- Database Design
- Background Processing
- Caching
- Testing
- CI/CD
- Containerization

---

## Current Progress

- ✅ Express + TypeScript
- ✅ PostgreSQL + Prisma
- ✅ JWT Authentication
- ✅ Validation Middleware
- ✅ Logging
- ✅ Docker
- ✅ GitHub Actions
- ✅ Redis
- ✅ BullMQ
- ✅ Background Workers

### Upcoming

- Redis Caching
- Advanced Testing
- API Documentation
- Performance Optimization
- NestJS Migration Project
