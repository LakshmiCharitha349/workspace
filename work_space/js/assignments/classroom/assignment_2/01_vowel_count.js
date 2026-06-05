/*
  Implement the below function to count number of vowels present in the
  give sentence.
  Examples:
  countVowels("hello world") returns 3
  countVowels("hEllo wOrld") returns 3
*/

function countVowels(sentence) {
  let count = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (isVowel(sentence[index])) {
      count++;
    }
  }

  return count;
}

function isVowel(char) {
  switch (char) {
    case 'a': return true;
    case 'e': return true;
    case 'i': return true;
    case 'o': return true;
    case 'u': return true;
    case 'A': return true;
    case 'E': return true;
    case 'I': return true;
    case 'O': return true;
    case 'U': return true;
    default: return false;
  }

}

function displayMessage(sentence, actualResult, expectedResult) {

  const inputFragment = '"' + sentence + '" ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testCountVowels(sentence, expected) {
  let result = countVowels(sentence);

  displayMessage(sentence, result, expected);
}

function testCases() {
  testCountVowels("hello world", 3);
  testCountVowels("hEllo wOrld", 3);
  testCountVowels("bdws", 0);
  testCountVowels("", 0);
}

testCases();