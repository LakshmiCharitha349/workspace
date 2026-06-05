import { createApp } from "./backend/app.js";

const main = () => {
  const app = createApp();
  // const todoList = new TodoList();
  Deno.serve({ port: 8000 }, app.fetch);
}

main();