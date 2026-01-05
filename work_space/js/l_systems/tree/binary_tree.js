const productionRules = {
  variables: ["0", "1"],
  constants: ["[", "]"],
  axiom: ["0"],
  rules: { "0": ["1", "[", "0", "]", "0", "]"], "1": ["1", "1"] },
};

const isCharConstant = (char, productionRules) =>
  productionRules.constants[char];

const applyProductionRules = (char, productionRules) => {
  return !isCharConstant(char, productionRules)
    ? char
    : productionRules.rules[char];
};

const applyRulesString = (strings, productionRules) =>
  strings.flatMap((string) => applyProductionRules(string, productionRules));

const generateBinaryTree = (string, levels, productionRules) => {
  if (levels == 0) {
    return string;
  }

  const generatedTree = applyRulesString(
    string,
    productionRules,
  );

  return generateBinaryTree(generatedTree, levels - 1, productionRules);
};

const binaryTree = generateBinaryTree(
  productionRules.axiom,
  3,
  productionRules,
);

console.log(binaryTree);
