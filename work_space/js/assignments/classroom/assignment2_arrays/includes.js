function isTypeArray(element) {
  return typeof element === "object";
}

function includes(array, target) {
  
}
function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function displayMessage(array, target, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${array} : ${target}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testIncludes(array, target, expected, gist) {
  const result = includes(array, target);
  displayMessage(array, target, result, expected, gist);
}

function testCases() {
  testIncludes([[1, 2], 3], [1,2], true, "normal array");
  testIncludes([1, 2, 3], 3, true, "number not in array");
  testIncludes([], 1, false, "empty array");
  testIncludes(undefined, 1, false, "empty array");
}

testCases();