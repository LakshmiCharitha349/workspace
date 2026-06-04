import { checkbox, select } from "@inquirer/prompts";

const isEmpty = (good) => good === "";

export const goodsToIcons = {
  "d": "💎",
  "g": "🥇",
  "si": "🪙",
  "c": "👕",
  "sp": "🌶️",
  "l": "💼",
};

const generateChoices = (goods) => {
  const choices = [];

  for (let index = 0; index < goods.length; index++) {
    const canBuy = goods[index] !== "🐪";

    choices.push({ name: goods[index], value: index, disabled: !canBuy });
  }

  return choices;
};

const generateRandomCard = () => Math.floor(Math.random() * 7);
const takeACard = async (goodsInMarket) => {
  const soldGood = await select({
    message: "Choose the good that you want to buy",
    required: true,
    choices: generateChoices(goodsInMarket),
  });

  return soldGood;
};

const selectGoods = async (goodsInMarket, total) => {
  const soldGoods = await checkbox({
    message: "Choose the goods that you want to exchange",
    required: true,
    choices: generateChoices(goodsInMarket),
    validate: (input) => {
      if (input.length < total) return `you must select ${total} items ..`;

      return true;
    },
  });

  return soldGoods;
};

export const posOfCards = {
  0: "daimonds",
  1: "gold",
  2: "silver",
  3: "cloth",
  4: "spices",
  5: "leather",
  6: "camels",
};

export class Market {
  #cards;
  #bonus;

  constructor(cards, tokens, bonus) {
    this.#cards = cards;
    this.goodsInMarket = [];
    this.soldGoods = [];
    this.#bonus = bonus;
    this.tokens = tokens;
  }

  openMarket() {
    for (let index = 0; index < 5; index++) {
      const pos = index < 3 ? 6 : generateRandomCard();
      const cardType = posOfCards[pos];
      this.goodsInMarket.push(this.#cards[cardType].shift());
    }
  }

  displayMarket() {
    const message = `*** MARKET *** \n\n ${this.goodsInMarket.join(" ")}\n`;
    console.log(message);
    return message;
  }

  async saleGoods() {
    const soldGoodIndex = await takeACard(this.goodsInMarket);
    const soldGood = this.goodsInMarket[soldGoodIndex];

    this.goodsInMarket[soldGoodIndex] = "";
    return soldGood;
  }

  exchangableGoods() {
    return this.goodsInMarket.filter((g) => g !== "🐪").length;
  }

  async exchangeGoods(givenGoods) {
    const noOfGoods = givenGoods.length;

    const soldGoodsIndexes = await selectGoods(this.goodsInMarket, noOfGoods);
    const soldGoods = soldGoodsIndexes.map((goodIndex) =>
      this.goodsInMarket[goodIndex]
    );

    for (let index = 0; index < soldGoodsIndexes.length; index++) {
      const item = givenGoods.shift();
      this.goodsInMarket[soldGoodsIndexes[index]] = item;
    }

    return soldGoods;
  }

  getRandomCard() {
    const pos = Math.floor(Math.random() * 7);
    return posOfCards[pos];
  }

  fillMarket() {
    for (let index = 0; index < 5; index++) {
      if (isEmpty(this.goodsInMarket[index])) {
        let cardType = this.getRandomCard();

        while (this.#cards[cardType].length === 0) {
          cardType = this.getRandomCard();
        }

        this.goodsInMarket[index] = this.#cards[cardType].pop();
      }
    }
  }

  containCamels() {
    return this.goodsInMarket.includes("🐪");
  }

  containOnlyCamels() {
    return this.goodsInMarket.every((g) => g === "🐪");
  }

  takeCamels() {
    const camelCards = [];
    for (let index = 0; index < 5; index++) {
      if (this.goodsInMarket[index] === "🐪") {
        camelCards.push(this.goodsInMarket[index]);
        this.goodsInMarket[index] = "";
      }
    }

    return camelCards;
  }

  sellGoods(soldItem, noOfCards) {
    const amount = [];
    amount.push(...this.tokens[soldItem].splice(0, noOfCards));

    if (noOfCards >= 3) {
      const bonus = this.#bonus[noOfCards].splice(0, 1);
      amount.push(...bonus);
    }

    return amount;
  }

  isClose() {
    let countOfEmptyGoods = 0;
    for (const token in this.tokens) {
      if (this.tokens[token].length === 0) {
        countOfEmptyGoods++;
      }
    }

    const areGoodsEmpty = Object.values(this.#cards).every((c) =>
      c.length === 0
    );
    return countOfEmptyGoods >= 3 || areGoodsEmpty;
  }
}
