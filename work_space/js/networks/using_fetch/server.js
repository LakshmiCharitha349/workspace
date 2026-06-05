import { createHandlerequest } from "./request_handler.js";

const readFile = (path) => Deno.readTextFileSync(path);

const main = () => {
  const handleRequest = createHandlerequest(readFile);
  Deno.serve(handleRequest);
};

main();
