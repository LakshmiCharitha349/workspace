function arrangeEvenAndOdd(array) {
 let arrayAfterSplit = [];
  arrayAfterSplit = arrangeEven(array,arrayAfterSplit, 0, 0);

  return arrayAfterSplit;
}

function arrangeEven(array, newArray, index) {
  if (index === array.length) {
    return arrangeOdd(array, newArray, 0);
  }

  if (isEven(array[index])) {
    newArray.push(array[index]);
  }   

  return arrangeEven(array, newArray, index + 1);
} 

function arrangeOdd(array, newArray, index) {
   if (index === array.length) {
    return newArray;
  }
   if (!isEven(array[index])) {
    newArray.push(array[index]);

  }
  return arrangeOdd(array, newArray, index + 1);
}


function isEven(number) {
  return number % 2 === 0;
}

function testCases() {
  console.log(arrangeEvenAndOdd([1, 2, 4]));
  console.log(arrangeEvenAndOdd([26, 12, 0, -2]));
  console.log(arrangeEvenAndOdd([1, 3, 5, 7]));
  console.log(arrangeEvenAndOdd([]));
}

testCases();