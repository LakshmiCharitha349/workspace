// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function difference(array1, array2) {
  const newArray = [];
  return areDeepEqual(array1, array2, newArray);
}

function isArray(element) {
  return typeof(element) === 'object';
}

function areArraysEqual(array1, array2, newArray) {
  let arrayEqual = 0;
  for (let index = 0; index < array1.length; index++) {
     let equal = 0;
    for (let index2 = 0; index2 < array2.length; index2++) {
      if (areDeepEqual(array1[index], array2[index2])) {
        equal = 1;
        arrayEqual = 1;
      }
    }
    if (equal === 0 && arrayEqual === 0) {
      newArray.push(array1[index]);
    }
  }

  return newArray;
}

function areDeepEqual(array1, array2, newArray) {
  if (typeof array1 !== typeof array2) {
    return newArray;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2, newArray);
  }

  return array1 === array2;
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

function testDifference(array1, array2, expected, gist) {
  const result = difference(array1, array2);
  displayMessage(array1, array2, result, expected, gist);
}

function testCases() {
  testDifference([1, 2, 4], [4, 2, 1], [], "same elements");
  testDifference([[1, 2], 4], [1, 2, 3], [[1, 2], 4], "nested elements");
  testDifference([[1, 2], 3, 9], [1, 2, 3], [[1, 2], 9], "nested elements");
  testDifference([[1, 2], 3, 9], [[1, 2], 3], [9], "one differ element");
}

testCases();


