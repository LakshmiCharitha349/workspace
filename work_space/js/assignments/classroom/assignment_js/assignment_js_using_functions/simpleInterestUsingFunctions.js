function resultMessage(actualResult,expectedResult) {
  const isApproximateValue = isApproximateEqual(actualResult,expectedResult);
  const resultSymbol = isApproximateValue ? "✅" : "❌";
  console.log(resultSymbol,"actual result is",actualResult,"expected result is",expectedResult);
}


function isApproximateEqual(actualResult,expectedResult) {
  const isEqual = (actualResult - 0.5) <= expectedResult && (actualResult + 0.5) >= expectedResult;
  return isEqual;
}

function printEvenNumbers(p,t,r) {
  return (p * t * r) / 100;
}

function testcompoundInterest(p,t,r,expectedResult) {
  const actualResult = printEvenNumbers(p,t,r);
  resultMessage(actualResult,expectedResult);
} 

testcompoundInterest(0,0,0,0);
testcompoundInterest(-200,1,5,-10);
testcompoundInterest(100,5,0.5,2.5);
testcompoundInterest(10000,10,5,5000);


