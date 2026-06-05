import { Hono } from "hono";
import { serveStatic } from "hono/deno"
import { logger } from "hono/logger"
import { cors } from "hono/cors";


export const createApp = () => {
  const app = new Hono();

  app.use(logger());
  app.use("*", cors({
    origin: "http://localhost:5173"
  }))
  // app.get("/api/*", serveStatic({ path: "/public/data.json" }));
  app.get("/", serveStatic({ path: "/index.html" }));
  app.get("/data.json", (c) => {
    return c.json({ name: "Lakshmi" });
  });

  return app;
}
