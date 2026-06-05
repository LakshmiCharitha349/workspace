function reverse(array) {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray.unshift(array[index]);
  }

  return newArray;
}

function displayMessage(array, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${array}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testReverse(array, expected, gist) {
  const result = reverse(array);
  displayMessage(array, result, expected, gist);
}

function testCases() {
  testReverse([1, 2, 3, 4], [4, 3, 2, 1], "array with numbers");
  testReverse([], [], "empty array");
  testReverse([10], [10], "array with single element");
}

testCases();