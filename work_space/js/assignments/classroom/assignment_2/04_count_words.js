/*
  Implement the below function to count the number of words
  in the given sentence.

  Rules:
  - A word is defined as a sequence of non-whitespace characters.
  - Whitespace includes SPACE(" "), TAB("\t"), and NEW LINE("\n").
  - Multiple consecutive whitespace characters should be treated
    as a single separator.
  - Leading and trailing whitespace should not affect the word count.

  Example:
  countWords("hello   \t   world \n test")
    -> 3
*/

function countWords(sentence) {
  let space = 0;
  let words = 0;

  for (let index = 0; index < sentence.length; index++) {
    if (!isSpace(sentence[index])) {
      space = 1;
    }

    if (isSpace(sentence[index]) && space === 1) {
      words++;
      space++;
    }

  }

  if (space === 1) {
    words = words + 1;
  }

  return words;
}

function isSpace(char) {
  return char === " " || char === "\n" || char === "\t";
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

function testCountWords(sentence, expected) {
  let result = countWords(sentence);

  displayMessage(sentence, result, expected);
}

function testCases() {
  testCountWords("hello  \t  world  \t test ", 3);
  testCountWords("   a      b      ", 2);
  testCountWords("    \t \n  ", 0);
  testCountWords("\n test \t \t   ", 1);
  testCountWords("test  te\nst  te   \t st       ", 5);
  testCountWords("test", 1);
  testCountWords("    ", 0);
  testCountWords("hello  \t  world  \t test   hi", 4);
  testCountWords("", 0);
  testCountWords("hello \t   world", 2);
  testCountWords("good mrng  ,\t  laptop", 4);
  testCountWords("good mrng  ,\t  laptop", 4);
  testCountWords("  hello  ", 1);


}

testCases();