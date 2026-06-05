let number = 12321;
let reverseOfNumber = 0;
const originalNumber = number;
while(number > 0) {
  const digit = number % 10;
  reverseOfNumber = reverseOfNumber * 10 + digit;
  number = (number - digit)/10;
}
if(originalNumber === reverseOfNumber) {
  console.log(originalNumber,"is palindrome");
} else {
  console.log(originalNumber,"not palindrome");
}


