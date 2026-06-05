function isTypeArray(element) {
  return typeof element === "object";
}

function includes(array, target) {
  if (!isTypeArray(array)) {
    return false;
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === target || areDeepEqual(array[index], target)) {
      return true;
    }
  }
  return false;
}

function areDeepEqual(array1, target) {
  if (isTypeArray(array1) && isTypeArray(target)) {
    if (array1.length === target.length) {
      return isEqual(array1, target);
    }
  }

  return false;
}

function isEqual(array1, target) {
  for (let index = 0; index < array1.length; index++) {
    const isSame = areDeepEqual(array1[index], target[index]);
    if (!isSame) {
      if (array1[index] !== target[index]) {
        return false;
      }
    } else {
      isEqual(array1[index], target[index]);
    }
  }
  return true;
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
  displayMessage(array, target, result,
    expected, gist);
}

function testCases() {
  testIncludes([[1, 2], 3], 1, false, "nested array");
  testIncludes([1, 2, 3], 1, true, "nested array");
  testIncludes([[1, 2], 3], [1, 2], true, "nested array");
  testIncludes([[1, 2], 3], 3, true, "element after nested array");
  testIncludes([], 1, false, "empty array");
  testIncludes(undefined, 1, false, "empty array");
}

testCases();