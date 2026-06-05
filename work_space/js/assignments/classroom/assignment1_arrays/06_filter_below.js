function filterBelow(array, threshold) {
  const valuesBelowThreshold = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      valuesBelowThreshold.push(array[index]);
    }
  }

  return valuesBelowThreshold;
}

function displayMessage(array, threshold, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${array} : ${threshold}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testFilterBelow(array, threshold, expected, gist) {
  const result = filterBelow(array, threshold);

  displayMessage(array, threshold, result, expected, gist);
}

function testCases() {
  testFilterBelow([6, 2, 3, 4, 7], 8, [6, 2, 3, 4, 7], "array of treshold 8");
  testFilterBelow([6, 2, 3, 4, 7], 3, [2], "array with treshold 3");
  testFilterBelow([], 10, [], "empty array");
}

testCases();