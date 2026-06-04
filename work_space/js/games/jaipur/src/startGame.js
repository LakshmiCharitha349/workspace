import { Market, posOfCards } from "./market.js";
import { bonusTokens, camelToken, cards, goodsTokens } from "../data/cards.js";
import { confirm, select } from "@inquirer/prompts";
import { Player } from "./player.js";
import { displayManual } from "./manual.js";

const buyAnItem = async (market, player) => {
  const purchasedItem = await market.saleGoods();
  player.buyAnItem([purchasedItem]);
  market.fillMarket();
};

const exchangeItems = async (market, player) => {
  const maxNoOfItems = market.exchangableGoods();
  const exchangingItems = await player.exchangeItems(maxNoOfItems);
  const exchnageditems = await market.exchangeGoods(exchangingItems);
  player.buyAnItem(exchnageditems);
};

const exchangeCamels = async (market, player) => {
  const exchangingItems = await player.exchangeCamels();
  const exchnageditems = await market.exchangeGoods(exchangingItems);
  player.buyAnItem(exchnageditems);
};

const collectCamels = (market, player) => {
  const camelCards = market.takeCamels();
  market.fillMarket();
  player.collectedCamels(camelCards);
};

const sellAnItem = async (market, player) => {
  const [soldItem, noOfItems] = await player.sellAnItem();
  const tokens = market.sellGoods(soldItem, noOfItems);

  player.tradedTokens(tokens);
};

const exitJaipur = () => Deno.exit();

export const tradeGoods = async (market, player) => {
  const isLimit = player.isHandFull();

  const onlyCamels = market.containOnlyCamels();
  const containCamels = market.containCamels();

  const typeofTrade = await select({
    message: `Select type of trade :--`,
    required: true,
    choices: [
      { name: "buy goods", value: buyAnItem, disabled: isLimit || onlyCamels },
      { name: "exchange goods", value: exchangeItems, disabled: onlyCamels },
      {
        name: "exchange camels",
        value: exchangeCamels,
        disabled: !player.hasCamels(),
      },
      {
        name: "collect all camels",
        value: collectCamels,
        disabled: !containCamels,
      },
      { name: "sell goods", value: sellAnItem },
      { name: "end trade", value: exitJaipur },
    ],
  });

  await typeofTrade(market, player);
};

const drawCards = (cards) => {
  const drawnCards = [];

  for (let index = 0; index < 5; index++) {
    const pos = Math.floor(Math.random() * 7);
    const cardType = posOfCards[pos];
    drawnCards.push(cards[cardType].shift());
  }

  return drawnCards;
};

export const generatePlayers = () => {
  const player1Cards = drawCards(cards);
  const player2Cards = drawCards(cards);

  const player1 = new Player(player1Cards);
  const player2 = new Player(player2Cards);

  return [player1, player2];
};

const displayScore = (player1, player2) => {
  const player1Tokens = player1.totalTokens();
  const player2Tokens = player2.totalTokens();

  console.log("\n --- PLAYER 1 --- ");
  player1.display();
  console.log("Total tokens ::", player1Tokens);

  console.log("\n --- PLAYER 2 --- \n");
  player2.display();
  console.log("Total tokens ::", player2Tokens);

  const winner = player1Tokens > player2Tokens ? "*** PLAYER! ***" : "PLAYER2";
  console.log("Winner ===>", winner);
};

const addCamelToken = (player1, player2) => {
  if (player1.totalCamels() < player2.totalCamels()) {
    player1.tradedTokens(camelToken);
    console.log(" * Camel Token --> player1 [ + 5 ]");
    return "";
  }
  console.log(" * Camel Token --> player2 [ + 5 ]");
  player2.tradedTokens(camelToken);
};

export const startTrade = async (market, player1, player2) => {
  market.openMarket();

  let isFirstPlayer = true;

  while (!market.isClose()) {
    const playerName = isFirstPlayer ? "player1" : "player2";
    console.log("TURN OF ::", playerName);

    const player = isFirstPlayer ? player1 : player2;
    player.display();
    market.displayMarket();
    await tradeGoods(market, player);
    isFirstPlayer = !isFirstPlayer;
    console.clear();
  }

  addCamelToken(player1, player2);
};

export const playGame = async () => {
  const [player1, player2] = generatePlayers();
  const market = new Market(cards, goodsTokens, bonusTokens);
  await startTrade(market, player1, player2);

  displayScore(player1, player2);
  console.log("--- Trade end ---");
};

playGame();
