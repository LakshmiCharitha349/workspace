// Do not rename a use it as input for your program.
// While testing we will change its values.

const a = 11;

// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let sumOfDigits = 0;
let number = a;
let isArmstrong = false;
let count = 0;

while (number !== 0) {
  count++;
  number = (number - (number % 10)) / 10;  
}

number = a;

while (number > 0) {
  const digit = number % 10;
  sumOfDigits = sumOfDigits + (digit ** count);
  number = (number - digit) / 10;
}

if (sumOfDigits === a) {
  isArmstrong = true;
}

console.log(isArmstrong);



