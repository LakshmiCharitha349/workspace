function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function displayMessage(array1, array2, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${array1} : ${array2}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testAreEqual(array1, array2, expected, gist) {
  const result = areEqual(array1, array2);
  displayMessage(array1, array2, result, expected, gist);
}

function testCases() {
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true, "arrays with same values");
  testAreEqual([1, 2, 3], [1, 2, 3, 4], false, "arrays with differ length");
  testAreEqual([1, 2, 3, 5], [1, 2, 3], false, "same values in differ order");
  testAreEqual([1, 2, 3], [1, 3, 2], false, "same values in differ order");
  testAreEqual([], [], true, "empty array");
}

testCases();