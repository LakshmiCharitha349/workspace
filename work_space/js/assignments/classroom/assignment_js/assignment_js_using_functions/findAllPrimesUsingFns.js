function testFindAllPrimes(startOfTheRange,endOfTheRange,expectedResult) {
  const actualResult = findAllPrimes(startOfTheRange,endOfTheRange);
  displaymessage(startOfTheRange,endOfTheRange,actualResult,expectedResult);
} 

function displaymessage(startOfTheRange,endOfTheRange,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"primes between",startOfTheRange,"and",endOfTheRange,"actual result is",actualResult,"expected result is ",expectedResult);

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

function findAllPrimes(startOfTheRange,endOfTheRange) {
  let primeSeries = "";

  for (let checkingNumber = startOfTheRange; checkingNumber <= endOfTheRange; checkingNumber++) {
    primeSeries = isPrime(checkingNumber) ? primeSeries + checkingNumber + " " : primeSeries; 
  }

  if (!primeSeries) {
    primeSeries = "no primes";
  }

  return primeSeries;
}

function testCases() {
  testFindAllPrimes(0,1,"no primes");
  testFindAllPrimes(0,5,"2 3 5 ");
  testFindAllPrimes(2,10,"2 3 5 7 ");
  testFindAllPrimes(1,2,"2 ");
  testFindAllPrimes(8,10,"no primes");

}

testCases();