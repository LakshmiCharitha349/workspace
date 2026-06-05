function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
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

function testFindIndex(array, element, expected, gist) {
  const result = findIndex(array, element);

  displayMessage(array, element, result, expected, gist);
}

function testCases() {
  testFindIndex(["apple", "cake", "tea", "coffee"], "tea", 2, "tea : 2");
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 2, "tea : 2");
  testFindIndex(["apple", "cake", "tea"], "chai", -1, "not found");
}

testCases();