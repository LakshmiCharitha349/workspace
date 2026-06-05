function filterAbove(array, threshold) {
  const valuesAboveThreshold = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      valuesAboveThreshold.push(array[index]);
    }
  }

  return valuesAboveThreshold;
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

function testFilterAbove(array, threshold, expected, gist) {
  const result = filterAbove(array, threshold);

  displayMessage(array, threshold, result, expected, gist);
}

function testCases() {
  testFilterAbove([6, 2, 3, 4, 7], 8, [], "array with treshold 8");
  testFilterAbove([6, 2, 3, 4, 7], 3, [6, 4, 7], "array with treshold 3");
  testFilterAbove([], 10, [], "empty array");
}

testCases();