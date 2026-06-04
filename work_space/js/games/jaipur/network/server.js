import { Market, posOfCards } from "../network/server.js";
import { bonusTokens, camelToken, cards, goodsTokens } from "../data/cards.js";
// import { displayManual } from "./manual.js";

export const getRequest = async (conn) => {
  const decoder = new TextDecoder();
  const buffer = new Uint8Array(1024);
  const n = await conn.read(buffer);
  if (!n) return;

  const decodedData = decoder.decode(buffer.slice(0, n));
  console.log(decodedData);
  return JSON.parse(decodedData);
};

const sendResponse = async (conn, { manual, market }) => {
  const encoder = new TextEncoder();
  const str = JSON.stringify({ manual, market });
  console.log(str);

  await conn.write(encoder.encode(str));
};

// const getResponse = (market, players, request) => {
//   return displayManual();
// };

const handleConnection = (market, players) => {
  // const manual = displayManual();

  return players.forEach(async (p) => {
    await sendResponse(p, { market: market.displayMarket() });
  });
};

export const agentHandler = async () => {
  const listener = Deno.listen({ port: 8000, transport: "tcp" });

  const market = new Market(cards, goodsTokens, bonusTokens);
  const players = [];

  for await (const conn of listener) {
    players.push(conn);

    if (players.length >= 2) {
      handleConnection(market, players);
    }
  }
};

await agentHandler();
