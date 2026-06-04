import { input } from "@inquirer/prompts";
// import { startTrade } from "./start_game.js";

const establishConnection = async () => {
  return await Deno.connect({
    hostname: "127.0.0.1",
    port: 8000,
    transport: "tcp",
  });
};

const displayMsg = (msg) => console.log(msg);

// const formatResponse = (response, params) => {
//   const { status, errCode, data } = response;

//   const { cmd, arg } = params;
//   const errMsg = {
//     10: `Counter ${arg} already exists`,
//     11: `Error: Counter ${arg} does not exist`,
//     15: `Error: INVALID COMMAND: ${cmd}`,
//     16: `Error: INVALID counter Name`,
//     14: `No counters available`,
//   };

//   const successMsg = {
//     CREATE: `Counter ${arg} created`,
//     INC: `Counter ${arg} incremented`,
//     GET: `Counter ${data}`,
//     LIST: `${data}`,
//     DELETE: `Counter ${arg} deleted`,
//   };

//   if (!status) {
//     return errMsg[errCode];
//   }

//   return successMsg[cmd];
// };

const recieveResponse = async (conn) => {
  const buffer = new Uint8Array(200);
  const totalBytes = await conn.read(buffer);

  const decoder = new TextDecoder();
  const response = decoder.decode(buffer.slice(0, totalBytes));

  return JSON.parse(response);
};

const sendRequest = async (conn, args) => {
  const encoder = new TextEncoder();
  const encodeddata = encoder.encode(args);
  await conn.write(encodeddata);
};

// const getArgs = async () => {
//   const args = await input({ message: "Enter name>>" });
//   const [cmd, arg] = args.split(" ");
//   return { cmd: cmd.toUpperCase(), arg };
// };

export const agent = async () => {
  const conn = await establishConnection();
  displayMsg("connection established ...");

  while (true) {
    const response = await recieveResponse(conn);

    displayMsg(response);

    // console.log({ response });
    // await startTrade(market, player);
  }
};

await agent();
