// Do not rename a or b, use them as input for your program.
// While testing we will change their values.
// a and b will be always 0 or greater.
const a = 21;
const b = 6;

// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let max = (a > b) ? a : b;
let lcm = 0;
let isFindLcm = a === 0 || b === 0;

while (!isFindLcm) {
  if (max % a === 0 && max % b === 0) {
    lcm = max;
    isFindLcm = true;
   }
  max = max + 1;
}

console.log(lcm);