// Do not rename a, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const a = 2;

// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let input = a;
if ( input === 0 ) {
  console.log(input);
}
while (input > 0) {
  const binaryDigit = input % 2;
  console.log(binaryDigit);
  input = (input - binaryDigit) / 2;
}