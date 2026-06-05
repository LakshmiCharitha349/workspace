function testIsPrime(checkingNumber,expectedResult) {
  const actualResult = isPrime(checkingNumber);
  displaymessage(checkingNumber,actualResult,expectedResult);
} 

function displaymessage(checkingNumber,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"actual result of ",checkingNumber," is ",actualResult,"expected result is ",expectedResult);

}

function isPrime(checkingNumber) {
  
  if (checkingNumber <= 1) {
    return false;
  }

  let divisor = 2;

  while (divisor < checkingNumber) {
    if (checkingNumber % divisor === 0) {
      return false; 
    }
    divisor++;
  }
  
  return true;
  }

function testCases() {
  testIsPrime(0,false);
  testIsPrime(1,false);
  testIsPrime(2,true);
  testIsPrime(3,true);
  testIsPrime(9,false);
  testIsPrime(11,true);
}

testCases();