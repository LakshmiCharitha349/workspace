function testfactorial(startOfTheRange,endOfTheRange,expectedResult) {
  const actualResult = printEvenNumbers(startOfTheRange,endOfTheRange);
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"actual result is ",actualResult,"expected result is ",expectedResult);
} 

function printEvenNumbers(startOfTheRange,endOfTheRange) {
  let actualStart = startOfTheRange % 2 === 0 ? startOfTheRange : startOfTheRange + 1;
  let evenNumbers = "";

  for (let checkNum = actualStart; checkNum <= endOfTheRange; checkNum = checkNum + 2) {
    evenNumbers = evenNumbers + checkNum + " ";
  }
  return evenNumbers;
}

testfactorial(0,0,"0 ");
testfactorial(0,15,"0 2 4 6 8 10 12 14 ");
testfactorial(3,10,"4 6 8 10 ");
testfactorial(1,2,"2 ");


