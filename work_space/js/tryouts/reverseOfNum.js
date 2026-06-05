let number = 121;
let reverseOfNumber = 0;

while(number > 0) {
  let digit = number % 10;
  reverseOfNumber = reverseOfNumber * 10 + digit;
  number = (number - digit)/10;
}
console.log("Reverse of number is",reverseOfNumber);
