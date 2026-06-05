function isTypeArray(element) {
  return typeof element === "object";
}

function areDeepEqual(value1, value2) {
  if (isTypeArray(value1) && isTypeArray(value2)) {
    return areArrayEqual(value1, value2);
  }

  return value1 === value2;
}

function areArrayEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {

    const isSame = areDeepEqual(array1[index], array2[index]);
    if (!isSame) {
      return false;
    }
  }

  return true;
}

function isEqual(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    const isSame = areDeepEqual(array1[index], array2[index]);
    if (!isSame) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    } else {
      isEqual(array1[index], array2[index]);
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

function testAreDeepEqual(array1, array2, expected, gist) {
  const result = areDeepEqual(array1, array2);
  displayMessage(array1, array2, result, expected, gist);
}

function testCases() {
  testAreDeepEqual([1, 2, 3, 4], [1, 2, 3, 4], true, "arrays with same values");
  testAreDeepEqual([1, [2]], [1, [2]], true, "nested arrays with same values");
  testAreDeepEqual([1, 2, 3, 5], [1, 2, 3], false, "different lengths");
  testAreDeepEqual([1, 2, 3], [1, 3, 2], false, "same values in differ order");
  testAreDeepEqual([], [], true, "empty array");
  testAreDeepEqual([1, [2, [3]]], [1, [2, 3]], false, "differ values");
  testAreDeepEqual([1, [2, [3]], 4], [1, [2, [3]], 5], false, "nested arrays");
  testAreDeepEqual([1, [2]], [1, [2]], true, "nested arrays with same values");
  testAreDeepEqual([], [], true, "empty array");
  testAreDeepEqual([1, [2, [3]], 4], [1, [2, [3]], 4], true, "nested arrays");
  testAreDeepEqual(8, "jk", false, "invalid arrays");
}

testCases();