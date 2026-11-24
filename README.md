# Vibe Engineering - Web API

A modern REST API built with Bun, ElysiaJS, and Drizzle ORM with MySQL database.

## Tech Stack

- **Runtime:** Bun (v1.4.5+)
- **Web Framework:** ElysiaJS
- **ORM:** Drizzle ORM
- **Database:** MySQL
- **Driver:** mysql2

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.4.5 or higher)
- MySQL server

### Setup Steps

1. **Clone and configure**

```bash
# Create .env from example
cp .env.example .env

# Edit .env with your database credentials
# DB_HOST=localhost
# DB_PORT=3306
# DB_USER=root
# DB_PASS=your_password
# DB_NAME=vibe_db
```

2. **Install Dependencies**

```bash
bun install
```

If you encounter SSL certificate issues, try:
```bash
bun install --no-ssl
```

3. **Generate Drizzle Migrations**

```bash
bun run db:generate
```

4. **Push Schema to Database**

```bash
bun run db:push
```

5. **Run the Server**

```bash
bun run dev
```

The API will be available at `http://localhost:3000`

### Available Scripts

- `bun run dev` - Start development server with watch mode
- `bun run start` - Start production server
- `bun run db:generate` - Generate Drizzle migration files
- `bun run db:push` - Push schema changes to database
- `bun run db:studio` - Open Drizzle Studio for visual database management

### Project Structure

```
.
├── src/
│   ├── index.ts           # ElysiaJS application entry point
│   ├── db/
│   │   ├── index.ts       # Database connection & Drizzle instance
│   │   └── schema/        # Database schema definitions
│   ├── routes/            # API route handlers
│   └── types/             # TypeScript type definitions
├── drizzle.config.ts      # Drizzle Kit configuration
├── .env.example           # Environment variables template
└── package.json
```

### API Endpoints

- `GET /health` - Health check endpoint
- `GET /` - Welcome message
- `GET /api/*` - Generic API endpoint
- `GET /api/users` - Users endpoint (TODO)

## Acceptance Criteria

- [x] Project can be run without error using `bun run dev`
- [x] ElysiaJS server running on configured port (3000)
- [x] Drizzle ORM can connect to MySQL and generate migrations via Drizzle Kit
- [x] `GET /health` endpoint returns status OK / 200

## Notes

- This is a student learning project exploring modern web development patterns.
- Database connection uses connection pooling for better performance.
- Graceful shutdown is implemented for production readiness.