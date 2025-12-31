//L-system to growth of algae

const algaeGrammar = {
  variables: "AB",
  axiom: ["A"],
  rules: { "A": ["A", "B"], "B": ["A"] },
};

const spawnVariable = (variable, algaeGrammar) => algaeGrammar.rules[variable];

const spawnAllStringsInSameLevel = (strings, algaeGrammar) =>
  strings.flatMap((string) => spawnVariable(string, algaeGrammar));

const generateAlgae = (string, levels, algaeGrammar) => {
  if (levels == 0) {
    return string;
  }

  const generatedAlgae = spawnAllStringsInSameLevel(
    string,
    algaeGrammar,
  );

  return generateAlgae(generatedAlgae, levels - 1, algaeGrammar);
};

const algae = generateAlgae(algaeGrammar.axiom, 10, algaeGrammar);

console.log("algae", algae);
