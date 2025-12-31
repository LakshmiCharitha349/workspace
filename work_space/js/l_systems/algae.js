//L-system to growth of algae

const algaeGrammar = {
  variables: "AB",
  axiom: "A",
  rules: { "A": [A, B], "B": ["A"] },
};

const spawnVariable = (variable, algaeGrammar) => algaeGrammar.rules[variable];

const spawnAllStringsInSameLevel = (strings, algaeGrammar) => {
  return strings.flatMap((string) => spawnVariable(string, algaeGrammar));
};

const generateAlgae = (string, levels, algaeGrammar) => {
  let parseString = [string];
  for (let index = 0; index < 5; index++) {
    parseString = spawnAllStringsInSameLevel(parseString, algaeGrammar);
  }

  return parseString;
};
