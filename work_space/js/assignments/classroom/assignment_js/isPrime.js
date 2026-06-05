// Do not rename a, use it as input for your program.
// While testing we will change their values.
// a will be always 1 or greater.
const a = 99;

// Print true(boolean) if a is prime otherwise print false(boolean). DO NOT print "true" or "false".
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let isPrime = a <= 1 ? false : true;
let checkNumber = 2;

while (checkNumber < a && isPrime) {
  if (a % checkNumber === 0 && a !== 2) {
    isPrime = false;  
  }
  checkNumber++;
}

console.log(isPrime);


// let isPrime = a === 1 ? false : true;

// for(let checkNum = 2;checkNum < a;checkNum++) {
//     if(a % checkNum === 0 && a !== 2) {
//       isPrime = false;  
//     }
// }

// console.log(isPrime);