import { Hono } from "Hono";
import { serveStatic } from "Hono/deno";


const createApp = () => {
  const app = new Hono();
  
  app.get("/api", serveStatic({ root: "public" }))
  return app;
}

const main = () => {
  const app = createApp();
  Deno.serve({ port: 8000 }, app.fetch)
}


main();
