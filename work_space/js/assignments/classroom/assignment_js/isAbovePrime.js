// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 10;

// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// Example: If a = 13, then the output should be 17

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let isFind = false;
let abovePrimeNum = a + 1;

while (!isFind) {
  let isAbovePrime = (abovePrimeNum !== 1);

  for (let divisor = 2; divisor < abovePrimeNum; divisor++) {
    if (abovePrimeNum % divisor === 0 && abovePrimeNum !== 2) {
      isAbovePrime = false;
    }
  }

  if (isAbovePrime) {
    isFind = true;  
    console.log(abovePrimeNum);
  }
  abovePrimeNum = abovePrimeNum + 1;
}
