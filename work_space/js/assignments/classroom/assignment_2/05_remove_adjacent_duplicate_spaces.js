/*
  Implement the below function to replace every run of adjacent SPACE(" ")
  characters with a single SPACE in the given sentence.

  Rules:
  - Consider only the plain SPACE character (" "). Any contiguous sequence
    of one or more SPACE characters should become a single SPACE.
  - Leading and trailing runs of spaces are also collapsed to a single space.
  - Do NOT modify other whitespace characters: TAB("\t") and NEW LINE("\n")
    must remain exactly as they are.
  - Runs of spaces that are separated by other characters (including \t or \n)
    are treated separately and each such run is collapsed independently.

  Examples:
  removeAdjacentDuplicateSpaces("statement      with    two spaces")
    -> "statement with two spaces"
    (multiple spaces between words collapsed to single spaces)

  removeAdjacentDuplicateSpaces("   hello   world   ")
    -> " hello world "
    (leading/trailing runs collapsed to single leading/trailing space)
*/

function removeAdjacentDuplicateSpaces(sentence) {

  let space = 0;
  let newString = "";

  for (let index = 0; index < sentence.length; index++) {

    if (sentence[index] === " " && space === 0) {
      newString += sentence[index];
      space++;
    }

    if (sentence[index] !== " ") {
      newString += sentence[index];
      space = 0;
    }

  }

  return newString;
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

function testRemoveAdjacentDuplicateSpaces(sentence, expected) {
  let result = removeAdjacentDuplicateSpaces(sentence);

  displayMessage(sentence, result, expected);
}

function testCases() {
  testRemoveAdjacentDuplicateSpaces("statment    with   two   spaces", "statment with two spaces");
  testRemoveAdjacentDuplicateSpaces("    hello  world   ", " hello world ");
  testRemoveAdjacentDuplicateSpaces("    hello  world\t\n  ", " hello world\t\n ");
  testRemoveAdjacentDuplicateSpaces("    hello       world\t\n  ", " hello world\t\n ");
  testRemoveAdjacentDuplicateSpaces("", "");
  testRemoveAdjacentDuplicateSpaces("  ", " ");
  testRemoveAdjacentDuplicateSpaces("_____   ", "_____ ");
  testRemoveAdjacentDuplicateSpaces(" tsest", " tsest");
  testRemoveAdjacentDuplicateSpaces("  tsest      ", " tsest ");
  testRemoveAdjacentDuplicateSpaces("  hello    \t\t\t   world", " hello \t\t\t world");



}

testCases();