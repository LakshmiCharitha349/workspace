function splitEvenAndOdd(array) {
 let arrayAfterSplit = [[],[]];
  arrayAfterSplit = splitOfNumbers(array, arrayAfterSplit, 0, 0);

  return arrayAfterSplit;
}

function splitOfNumbers(array, newArray, index, newIndex) {
  if (index === array.length) {
    return newArray;
  }

  if (isEven(array[index])) {
    newArray[newIndex].push(array[index]);
    return splitOfNumbers(array, newArray, index + 1, newIndex);
  }

    newArray[newIndex + 1].push(array[index]);
    return splitOfNumbers(array, newArray, index + 1, newIndex);

  
}   

function isEven(number) {
  return number % 2 === 0;
}

function testCases() {
  console.log(splitEvenAndOdd([1, 2, 4]));
  console.log(splitEvenAndOdd([26, 12, 0, -2]));
  console.log(splitEvenAndOdd([1, 3, 5, 7]));
  console.log(splitEvenAndOdd([]));
}

testCases();