function isPrime(abovePrimeNum) {
  if (abovePrimeNum <= 1) {
    return false;
  }
  
  let divisor = 2;
  
  while (divisor < abovePrimeNum) {
    if (abovePrimeNum % divisor === 0) {
      return false; 
    }
    
    divisor++;
  }
  
  return true;
}

function findAbovePrime(term) {
  let isFind = false;
  let abovePrimeNum = term + 1;
  
  while (!isFind) {
    let isAbovePrime = isPrime(abovePrimeNum);
    
    if (isAbovePrime) {
      return abovePrimeNum; 
    }
    
    abovePrimeNum = abovePrimeNum + 1;
  }
  
}

function displaymessage(term,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"Above prime of",term,"actual result is",actualResult,"expected result is ",expectedResult); 
}

function testFindAbovePrime(term,expectedResult) {
  const actualResult = findAbovePrime(term);
  displaymessage(term,actualResult,expectedResult);
} 

function testCases() {

  testFindAbovePrime(0,2);
  testFindAbovePrime(1,2);
  testFindAbovePrime(2,3);
  testFindAbovePrime(7,11);
  testFindAbovePrime(8,11);

}

testCases();