function testfibonacciSeries(term,expectedResult) {
  const actualResult = fibonacciSeries(term);
  displaymessage(actualResult,expectedResult);
} 

function displaymessage(actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"actual result is ",actualResult,"expected result is ",expectedResult);

}

function fibonacciSeries(term) {
  
  if (term === 0) {
    return "no terms";
  }

  let term1 = 0;
  let term2 = 1;
  let series = "";

  for (let startOfRange = 1; startOfRange <= term; startOfRange++) {
    series = series + term1 + " ";
    const term3 = term1 + term2;
    term1 = term2;
    term2 = term3; 
  }
  return series;
}

function testCases() {
  testfibonacciSeries(0,"no terms");
  testfibonacciSeries(5,"0 1 1 2 3 ");
  testfibonacciSeries(1,"0 ");
  testfibonacciSeries(10,"0 1 1 2 3 5 8 13 21 34 ");
  testfibonacciSeries(2,"0 1 ");
}

testCases();