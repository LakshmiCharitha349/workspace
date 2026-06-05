function isArmstrong(checkingTerm) {
  let sumOfDigits = 0;
  let term = checkingTerm;
  const numberOfDigits = countDigits(term);

  while (term > 0) {
    const digit = term % 10;
    sumOfDigits = sumOfDigits + (digit ** numberOfDigits);
    term = (term - digit) / 10;
  }

  if (sumOfDigits === checkingTerm) {
    return true;
  }

  return false;
}

function countDigits(term) {
  let count = 0;
  
  while (term !== 0) {
    count++;
    term = (term - (term % 10)) / 10;  
  }
  
  return count;

}

function displaymessage(checkingTerm,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"Armstrong of ",checkingTerm,"actual result is",actualResult,"expected result is ",expectedResult); 
}

function testIsArmstrong(checkingTerm,expectedResult) {
  const actualResult = isArmstrong(checkingTerm);
  displaymessage(checkingTerm,actualResult,expectedResult);
} 

function testCases() {

  testIsArmstrong(0,true);
  testIsArmstrong(1,true);
  testIsArmstrong(2,true);
  testIsArmstrong(153,true);
  testIsArmstrong(1634,true);
  testIsArmstrong(122,false);

}

testCases();