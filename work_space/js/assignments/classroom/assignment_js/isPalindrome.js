// Do not rename a, use them as input for your program.
// While testing we will change its values.

const a = 100;

// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let reverseOfNumber = 0;
let number = a;
let isPalindrome = false;

while(number > 0) {
  const digit = number % 10;
  reverseOfNumber = reverseOfNumber * 10 + digit;
  number = (number - digit)/10;
}

if(reverseOfNumber === a) {
  isPalindrome = true;
}

console.log(isPalindrome);



