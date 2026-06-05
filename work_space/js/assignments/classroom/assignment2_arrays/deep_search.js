function isTypeArray(element) {
  return typeof (element) === "object"; 
}

function areDeepEqual(array1, array2) {

  if(isTypeArray(array1) && isTypeArray(array2)) {
    if (array1.length === array2.length){
      return isEqual(array1,array2,0);
    }
    else{
      return false;
    }
  }
  
  return false;
}

function isEqual(array1, array2, index) {

  if (index === array1.length) {
    return true;
  }
  if(!areDeepEqual(array1[index], array2[index])) {
    return isEqual(array1[index], array2[index], index + 1);
  }
    
  if (array1[index] !== array2[index]) {
    return false;
  }
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
  // testAreDeepEqual([1, [2]], [1, [2]], true, "arrays with same values");
  // testAreDeepEqual([1, 2, 3], [1, 2, 3, 4], false, "arrays with difer length");
  // testAreDeepEqual([1, 2, 3, 5], [1, 2, 3], false, "same values in differ order");
  // testAreDeepEqual([1, 2, 3], [1, 3, 2], false, "same values in differ order");
  // testAreDeepEqual([], [], true, "empty array");
  // testAreDeepEqual([1, [2, [3]]], [1, [2, 3]], false, " nested values");
  // testAreDeepEqual([1, [2, [3]]], [1, [2, 3]], false, "differ elements");
  // testAreDeepEqual([1, [2, [3]]], [1, [2, [3]]], true, "nested arrays");
  // testAreDeepEqual([[], [2, [3]]], [[], [2, [3]]], true, "nested arrays");
  testAreDeepEqual([1, [2, [9]], 4], [1, [2, [9]], 5], false, "nested arrays");
}

testCases();