import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";

export const createApp = () => {
  const app = new Hono();

  app.use(logger());
  app.post("/add", async (context) => {
    const body = await context.req.json();
    console.log("hlo here", body);
    return context.json({ "name": "me" });
  })
  app.get("*", serveStatic({ root: "public" }));
  return app;
}; 
