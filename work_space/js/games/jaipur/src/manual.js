export const displayManual = () => {
  const gameName = "\n\t\t\t✨<=== JAIPUR ===>✨\n";

  const rules = `
  * trade tokens by selling goods to win the trade.
  * use camels to exchange goods from market.
  * selling high valued goods (diamond, gold, silver) gives high valued tokens.
  * you can buy / sell only one type of item at a time.
  * you can also exchange your goods with the goods in market.
  * get bonus by selling 3 / 4 / 5 cards at a time.
  `;

  return `${gameName}${rules}`;
};
