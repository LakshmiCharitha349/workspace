function isPalindrome(palindromeTerm) {
  let isPalindromeCheck = reverse(palindromeTerm) === palindromeTerm;
  return isPalindromeCheck;
}

function reverse(palindromeTerm) {
  let checkingTerm = palindromeTerm;
  let reverseOfNumber = 0;

  while (checkingTerm > 0) {
    const digit = checkingTerm % 10;
    reverseOfNumber = reverseOfNumber * 10 + digit;
    checkingTerm = (checkingTerm - digit) / 10;
  }

  return reverseOfNumber;
}

function displayMessage(palindromeTerm,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"palindrome of ",palindromeTerm,"actual result is",actualResult,"expected result is ",expectedResult); 
}

function testIsPalindrome(palindromeTerm,expectedResult) {
  const actualResult = isPalindrome(palindromeTerm);
  displayMessage(palindromeTerm,actualResult,expectedResult);
} 

function testCases() {

  testIsPalindrome(0,true);
  testIsPalindrome(1,true);
  testIsPalindrome(11,true);
  testIsPalindrome(121,true);
  testIsPalindrome(1234321,true);
  testIsPalindrome(122,false);

}

testCases();