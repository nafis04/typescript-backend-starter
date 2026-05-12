# TypeScript Backend Starter

A scalable backend starter project built with:

- Node.js
- Express.js
- TypeScript

This project is part of my backend engineering learning journey focused on building production-ready backend systems using modern TypeScript architecture.

---

# Features

- Express server setup
- TypeScript configuration
- Modular route architecture
- Controllers separation
- Typed interfaces
- Environment variable support
- Clean folder structure
- REST API endpoints

---

# Project Structure

```bash
src/
│
├── controllers/
├── routes/
├── interfaces/
├── data/
├── app.ts
└── server.ts
```

---

# Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into project directory:

```bash
cd typescript-backend-starter
```

Install dependencies:

```bash
npm install
```

---

# Run Development Server

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:5000
```

---

# Build Project

Compile TypeScript into JavaScript:

```bash
npm run build
```

---

# API Endpoints

## Get All Tasks

```http
GET /tasks
```

---

## Get Task By ID

```http
GET /tasks/:id
```

Example:

```http
GET /tasks/1
```

---

# Tech Stack

- Node.js
- Express.js
- TypeScript
- ts-node-dev

---

# Learning Goals

This project is focused on learning:

- TypeScript fundamentals
- Backend architecture
- Modular API design
- Type-safe development
- Scalable project structure

---

# Future Improvements

- PostgreSQL integration
- Authentication
- Validation middleware
- Docker support
- Redis caching
- Queue processing
- Error handling middleware
- Logging system
