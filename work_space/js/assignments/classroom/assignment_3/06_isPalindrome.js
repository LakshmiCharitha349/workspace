function isPalindrome(palindromeCandidate) {
  const length = palindromeCandidate.length
  const reverseString = reverse(palindromeCandidate, length);

  if (reverseString === palindromeCandidate) {
    return true;
  }

  return false;
}

function reverse(string, length) {
  if (length === 0) return "";

  return string[length - 1] + reverse(string, length - 1);
}

function displayMessage(palindromeCandidate, actualResult, expectedResult) {
  const inputFragment = '"' + palindromeCandidate + '"  ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testIsPalindrome(palindromeCandidate, expected) {
  let result = isPalindrome(palindromeCandidate);

  displayMessage(palindromeCandidate, result, expected);
}

function testCases() {
  testIsPalindrome("abcba", true);
  testIsPalindrome("", true);
  testIsPalindrome("hello world", false);
}

testCases();