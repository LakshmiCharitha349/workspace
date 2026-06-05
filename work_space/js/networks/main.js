import { server } from "./src/myServer.js";
import { requestHandler } from "./src/request_hanler.js";

await server(8000, requestHandler);
