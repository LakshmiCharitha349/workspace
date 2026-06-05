import { Hono } from "hono";
// import { etag } from "hono/etag";
import { logger } from "hono/logger";

export const createApp = () => {
  const app = new Hono();
  // console.log(app);

  app.use(logger());

  app.get("/greet/:name", (c) => {
    const name = c.req.param("name");
    console.log("c", c);

    return c.text(`hi ${name}`);
  });

  app.get("/", (c) => c.text("hi hlo .."));

  app.use("*", async (c) => { //middleware
    app.set("key", "value");
    await next();
  });

  app.post("/greet", async (c) => {
    const name = await c.req.text();
    const value = app.get("key");
    return c.text(`hi ${value}`);
  });

  app.get("*", (c) => c.text("nothing"));
  return app;
};
