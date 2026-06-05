/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function fizzBuzz(number) {
  // Implementation here.
  const isDivisibleBy3 = number % 3 === 0;
  const isDivisibleBy5 = number % 5 === 0;

  if (isDivisibleBy3) {
    if (isDivisibleBy5) {
      return "fizzbuzz";
    }

    return "fizz";
  }

  if (isDivisibleBy5) {
    return "buzz";
  }

  return "" + number;
}

function displayMessage(number, actualResult, expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  const inputFragment = '"' + number + '" ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;

  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);
}

function testFizzBuzz(number, expectedResult) {
  const actualResult = fizzBuzz(number);

  displayMessage(number, actualResult, expectedResult);
}

function testCases() {
  testFizzBuzz(3, "fizz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(7, "7");
}

testCases();