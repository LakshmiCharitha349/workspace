// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 97;

// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a;

for(let checkFactor = 2; checkFactor <= number;) {
  if(number % checkFactor === 0) {
    console.log(checkFactor);
    number = number / checkFactor;
  } else {
    checkFactor++ ;
  }
}