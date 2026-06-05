function printPrimeFactors(term) {
  let number = term;
  let primeFactors = "";

  for (let checkFactor = 2; checkFactor <= number;) {
    if (number % checkFactor === 0) {
      primeFactors = primeFactors + checkFactor +  " ";
      number = number / checkFactor;
    } else {
      checkFactor++ ;
    }
  }

  return primeFactors;
}

function displayMessage(actualResult, expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  console.log(resultSymbol, "actual result", actualResult, "expected result", expectedResult);
}

function testPrintPrimeFactors(term, expectedResult) {
  const actualResult = printPrimeFactors(term);

  displayMessage(actualResult, expectedResult);
}

function testCases() {
  testPrintPrimeFactors(0, "");
  testPrintPrimeFactors(1, "");
  testPrintPrimeFactors(12, "2 2 3 ");
  testPrintPrimeFactors(9, "3 3 ");
  testPrintPrimeFactors(45, "3 3 5 ");
}

testCases();