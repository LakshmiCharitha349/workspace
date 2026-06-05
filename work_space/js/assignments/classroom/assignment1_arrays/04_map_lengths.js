function mapLengths(words) {
  const lengthsOfWords = [];

  for (let index = 0; index < words.length; index++) {
    lengthsOfWords.push(words[index].length);
  }

  return lengthsOfWords;
}

function displayMessage(words, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${words}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testMapLengths(words, expected, gist) {
  const result = mapLengths(words);
  displayMessage(words, result, expected, gist);
}

function testCases() {
  testMapLengths(["apple", "cat", "four"], [5, 3, 4], "words of differ size");
  testMapLengths(["", "cat", "four"], [0, 3, 4], "one empty word");
  testMapLengths(["map lengths"], [11], "one word");
}

testCases();