function isLeap(checkingYear) {
  
  if (checkingYear === 0) {
    return false;
  }

  const isDivisibleBy4 = checkingYear % 4 === 0;
  const isDivisibleBy100 = checkingYear % 100 === 0;
  const isDivisibleBy400 = checkingYear % 400 === 0

  const isLeap = (isDivisibleBy4 && !isDivisibleBy100) || isDivisibleBy400;

  return isLeap;
}

function displayMessage(checkingYear,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"Year ",checkingYear," is leap actual result is",actualResult,"expected result is ",expectedResult); 
}

function testIsLeapYear(checkingYear,expectedResult) {
  const actualResult = isLeap(checkingYear);
  displayMessage(checkingYear,actualResult,expectedResult);
} 

function testCases() {

  testIsLeapYear(1,false);
  testIsLeapYear(0,false);
  testIsLeapYear(100,false);
  testIsLeapYear(2024,true);
  testIsLeapYear(1900,false);
  testIsLeapYear(400,true);

}

testCases();