function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (isFind(array[index], element)) {
      return index;
    }
  }

  return -1;
}

function isFind(string, element) {
  return string === element;
}

function displayMessage(array, element, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${array} : ${element}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testFindLastIndex(array, element, expected, gist) {
  const result = findLastIndex(array, element);

  displayMessage(array, element, result, expected, gist);
}

function testCases() {
  testFindLastIndex(["apple", "cake", "tea", "coffee"], "tea", 2, "tea : 2");
  testFindLastIndex(["apple", "tea", "coffee", "tea"], "tea", 3, "tea : 3");
  testFindLastIndex(["apple", "cake", "tea"], "chai", -1, "not found");
}

testCases();