function findingWords(string) {
  let series = "";

  while(string.length >= 1) {
    let isItVowel = isVowel(string[0]);
    let wordSeries = string[0];
    let words = "";

    for (let index = 1; index < string.length; index++) {
      if (isItVowel && !isVowel(string[index])) {
        wordSeries += string[index];
        isItVowel = false;
      } else if (!isItVowel && isVowel(string[index])) {
        wordSeries += string[index];
        isItVowel = true;
      } else {
        words += string[index];
      }

    }

    series += wordSeries + " ";
    string = words;
  }

  return series; 
}

function isVowel(char) {
  return char === 'a' || char === "e" || char === "i" || char === "o" || char === "u";
}

function displayMessage(string, actualResult, expectedResult) {

  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  const inputFragment = ' "' + string + '"';
  const actualFragment = " Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;

  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);
}

function testFindingWords(string, expectedResult) {
  const actualResult = findingWords(string);

  displayMessage(string, actualResult, expectedResult);
}

function testCases() {
  testFindingWords("appleee", "ape pe le ");
  testFindingWords("there", "tere h ");
  testFindingWords("hello", "helo l ");
  testFindingWords("this", "tis h ");
  testFindingWords("charitha", "carita h h ");
  testFindingWords("aeele", "ale e e ");
  testFindingWords("peace", "pece a ");
  testFindingWords("oppurtunities", "opurunitis pe t ");
  testFindingWords("oppurtunity", "opurunit p t y ");
  testFindingWords("o", "o ");
  testFindingWords("", ""); 
}

testCases();