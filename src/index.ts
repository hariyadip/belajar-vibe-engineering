import { Elysia, t } from "elysia";
import { health } from "./routes/health";

async function startServer() {
  const app = new Elysia()
    .get("/health", health.get)
    .get("/", () => "Welcome to Vibe Engineering API")
    // Serve static files (placeholder structure)
    .get("/api/*", ({ path }) => `API Endpoint: ${path}`)
    .get("/api/users", async () => {
      // TODO: Implement users endpoint
      return { message: "Users endpoint coming soon" };
    })
    .set({
      name: "backend-api",
      env: {
        PORT: 3000, // Override default 3000
      },
    });

  const port = 3000;
  await app.listen({ port });

  return app;
}

// Start server
const app = startServer();

// Graceful shutdown
if (process.env.NODE_ENV !== "test") {
  process.on("SIGINT", async () => {
    console.log("Shutting down gracefully...");
    if (app.server) {
      await app.server.stop();
    }
    process.exit(0);
  });
}

console.log(`🚀 Server running at http://localhost:3000`);