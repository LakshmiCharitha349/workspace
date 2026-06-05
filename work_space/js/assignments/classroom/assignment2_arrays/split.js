function split(sentence, delimiter) {
  const arrayOfSplitWords = [];
  let start = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === delimiter) {
      arrayOfSplitWords.push(sentence.slice(start, index));
      start = index + 1;
    }
  }

  arrayOfSplitWords.push(sentence.slice(start, sentence.length));
  return arrayOfSplitWords;
}

function displayMessage(sentence, delimeter, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${sentence} : ${delimeter}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testSplit(sentence, delimeter, expected, gist) {
  const result = split(sentence, delimeter);
  displayMessage(sentence, delimeter, result, expected, gist);
}

function testCases() {
  testSplit("a,b,c", ",", ["a", "b", "c"], "split at ,");
  testSplit("one:two:three", ":", ["one", "two", "three"], "split at :");
  testSplit("hello", ":", ["hello"], "split at :");
  testSplit("", ":", [""], "split empty string");
  testSplit(",", ":", ["", ""], "split empty string");
}

testCases();