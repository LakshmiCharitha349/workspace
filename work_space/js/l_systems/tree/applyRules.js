const treeRules = {
  variables: ["0", "1"],
  constants: ["[", "]"],
  axiom: ["0"],
  rules: { "0": ["1", "[", "0", "]", "0"], "1": ["1", "1"] },
};

const a = {
  variables: ["F"],
  constants: ["[", "]", "+", "-"],
  axiom: ["F"],

  rules: { "F": ["F", "[", "+", "F", "]", "F", "[", "-", "F", "]", "F"] },
};

const cantorSetRules = {
  variables: ["A", "B"],
  axiom: ["A"],
  constants: [],
  rules: { "A": ["A", "B", "A"], "B": ["B", "B", "B"] },
};

const dragonCurveRules = {
  variables: ["F", "G"],
  constants: ["+", "-"],
  axiom: ["F"],
  rules: { "F": ["F", "+", "G"], "G": ["F", "-", "G"] },
};

const kockCurveRules = {
  variables: ["F"],
  axiom: ["F"],
  constants: ["+", "-"],
  rules: { "F": ["F", "+", "F", "-", "F", "-", "F", "+", "F"] },
};

const triangleRules = {
  variables: ["F", "G"],
  axiom: ["F", "-", "G", "-", "G"],
  constants: ["+", "-"],
  rules: {
    "F": ["F", "-", "G", "+", "F", "+", "G", "-", "F"],
    "G": ["G", "G"],
  },
};

const triangleArrowHeadRules = {
  variables: ["A", "B"],
  axiom: ["A"],
  constants: ["+", "-"],
  rules: {
    "A": ["B", "-", "A", "-", "B"],
    "B": ["A", "+", "B", "+", "A"],
  },
};

const fractalTreeRules = {
  variables: ["F", "X"],
  constants: ["+", "-", "[", "]"],
  axiom: ["X"],
  rules: {
    "X": [
      "F",
      "+",
      "[",
      "[",
      "X",
      "]",
      "-",
      "X",
      "]",
      "-",
      "F",
      "[",
      "-",
      "F",
      "X",
      "]",
      "+",
      "X",
    ],
    "F": ["F", "F"],
  },
};

const isCharConstant = (char, productionRules) =>
  productionRules.constants.includes(char);

const isCharVariable = (char, rules) => rules.variables.includes(char);

const applyProductionRules = (char, productionRules) => {
  return !isCharVariable(char, productionRules)
    ? char
    : productionRules.rules[char];
};

const applyRulesString = (strings, productionRules) =>
  strings.flatMap((string) => applyProductionRules(string, productionRules));

export const getString = (string, levels, productionRules) => {
  if (levels == 0) {
    return string;
  }

  const generatedString = applyRulesString(
    string,
    productionRules,
  );

  return getString(generatedString, levels - 1, productionRules);
};

export const getBinaryTreeString = (size) => {
  const binaryTree = getString(
    treeRules.axiom,
    size,
    treeRules,
  );
  return binaryTree;
};

export const getCantorSetString = (size) => {
  return getString(
    cantorSetRules.axiom,
    size,
    cantorSetRules,
  );
};

export const getKockCurveString = (size) => {
  const string = getString(
    kockCurveRules.axiom,
    size,
    kockCurveRules,
  );

  // console.log("string", string.join(""));
  return string.join("");
};

export const getFractalTreeString = (size) => {
  const tree = getString(
    fractalTreeRules.axiom,
    size,
    fractalTreeRules,
  );

  return tree;
};

export const getDragonCurveString = (size) => {
  return getString(
    dragonCurveRules.axiom,
    size,
    dragonCurveRules,
  );
};

export const gettriangleString = (size) => {
  return getString(
    triangleRules.axiom,
    size,
    triangleRules,
  );
};

export const gettriangleArrowHeadString = (size) => {
  return getString(
    triangleArrowHeadRules.axiom,
    size,
    triangleArrowHeadRules,
  );
};
