import { Context, Hono } from "hono";
import { serveStatic } from "hono/deno"
import { logger } from "hono/logger"
import { cors } from "hono/cors";

const addTask = async (c) => {
  const req = await c.req.json();
  console.log(req);

}

export const createApp = (todoList) => {
  const app = new Hono();
  
  app.use("*", (c) => {
    c.set("todoList", todoList)
  })
  app.use(logger());
  app.use("*", cors({
    origin: "http://localhost:5173"
  }))

  app.post("/add-task", addTask)
  app.get("/", serveStatic({ path: "/index.html" }));
  app.get("/data.json", (c) => {
    return c.json({ name: "Lakshmi" });
  });

  return app;
}
