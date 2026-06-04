import { checkbox, input, select } from "@inquirer/prompts";
const generateChoices = (cards, camels) => {
  const choices = [];

  for (let index = 0; index < cards.length; index++) {
    choices.push({ name: cards[index], value: index });
  }

  for (let index = 0; index < camels.length; index++) {
    choices.push({ name: camels[index], value: camels[index] });
  }

  return choices;
};

const selectGoods = async (cards, camels, maxItems) => {
  const soldGoods = await checkbox({
    message: "Choose the goods that you want to exchange from your pile",
    required: true,
    choices: generateChoices(cards, camels),
    validate: (input) => {
      if (input.length > maxItems) {
        return `max available items is ${maxItems}`;
      }
      return true;
    },
  });

  return soldGoods;
};

export class Player {
  #cards;
  #camels;
  #balance;

  constructor(cards) {
    this.cards = [];
    this.#camels = [];
    this.#balance = [];

    for (const card of cards) {
      if (card === "🐪") this.#camels.push(card);
      else this.cards.push(card);
    }
  }

  totalTokens() {
    return this.#balance.reduce((sum, t) => t + sum);
  }

  totalCamels() {
    return this.#camels.length;
  }

  hasCamels() {
    return this.#camels.length !== 0;
  }

  isHandFull() {
    return this.cards.length === 7;
  }

  buyAnItem(item) {
    this.cards.push(...item);
  }

  async exchangeItems(maxItems) {
    const selectedItems = [];
    let exchangeItems = await selectGoods(this.cards, this.#camels, maxItems);
    exchangeItems = exchangeItems.filter((i) => {
      if (i === "🐪") {
        selectedItems.push(this.#camels.shift());
        return false;
      }
      return true;
    });

    const noOfItems = exchangeItems.length;

    for (let index = 0; index < noOfItems; index++) {
      const item = this.cards[exchangeItems[index]];
      selectedItems.push(item);
      this.cards[exchangeItems[index]] = "";
    }

    this.cards = this.cards.filter((c) => c);

    return selectedItems;
  }

  async exchangeCamels() {
    const totalCards = this.cards.length;
    const maxCards = 7;
    const maxExchangableCards = maxCards - totalCards;

    const noOfCamels = await input({
      message: "Number of camels ::",
      validate: (input) => {
        if (input > maxExchangableCards) {
          return `You can exchange only  ${maxExchangableCards}`;
        }
        return true;
      },
    });
    return this.#camels.splice(0, noOfCamels);
  }

  collectedCamels(camelCards) {
    this.#camels.push(...camelCards);
  }

  tradedTokens(tokens) {
    this.#balance.push(...tokens);
  }

  async sellAnItem() {
    const soldItem = await select({
      message: "Choose item that you want to sale",
      required: true,
      choices: [
        {
          name: "diamond [ 💎 ]",
          value: "💎",
          disabled: !this.cards.includes("💎"),
        },
        {
          name: "gold [ 🥇 ]",
          value: "🥇",
          disabled: !this.cards.includes("🥇"),
        },
        {
          name: "silver [ 🪙 ]",
          value: "🪙",
          disabled: !this.cards.includes("🪙"),
        },
        {
          name: "leather [ 💼 ]",
          value: "💼",
          disabled: !this.cards.includes("💼"),
        },
        {
          name: "cloth [ 👕 ]",
          value: "👕",
          disabled: !this.cards.includes("👕"),
        },
        {
          name: "spices [ 🌶️ ]",
          value: "🌶️",
          disabled: !this.cards.includes("🌶️"),
        },
      ],
      validate: (input) => {
        if (input.length > 1) return "You can select only one item";

        return true;
      },
    });

    const beforeSell = this.cards.length;
    this.cards = this.cards.filter((card) => card !== soldItem);
    const noOfItems = beforeSell - this.cards.length;
    return [soldItem, noOfItems];
  }

  display() {
    const remainCards = `remain Goods :: ${this.cards.join(" ")}`;
    const totalBalance = `tokens :: ${this.#balance}`;
    const totalCamels = `camelcards :: ${this.#camels}`;
    const tradeDetails = `\n${remainCards}\n${totalBalance}\n${totalCamels}\n`;
    console.log(tradeDetails);
  }
}
