function testnthFibonacciTerm(term,expectedResult) {
  const actualResult = nthFibonacciterm(term);
  displaymessage(term,actualResult,expectedResult);
} 

function displaymessage(term,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,term,"th term actual result is ",actualResult,"expected result is ",expectedResult);

}

function nthFibonacciterm(term) {
  if(term === 0) {
    return "no terms";
  }
  let term1 = 0;
  let term2 = 1;

  for (let startOfTheRange = 1; startOfTheRange < term; startOfTheRange++) {
    const term3 = term1 + term2;
    term1 = term2;
    term2 = term3;
  }

  return term1
}

function testCases() {
  testnthFibonacciTerm(0,"no terms");
  testnthFibonacciTerm(1,0);
  testnthFibonacciTerm(2,1);
  testnthFibonacciTerm(3,1);
  testnthFibonacciTerm(4,2);
  testnthFibonacciTerm(8,13);
}
testCases();