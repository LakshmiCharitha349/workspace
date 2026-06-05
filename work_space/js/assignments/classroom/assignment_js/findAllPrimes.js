// Do not rename startOfRange or endOfRange, use them as input for your program.
// While testing we will change their values.

const startOfRange = 0;
const endOfRange = 1;

// Print all prime numbers between startOfRange and endOfRange(both inclusive).
// For example, if startOfRange = 5 and endOfRange = 13, then the output should be
// 5
// 7
// 11
// 13
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

for (let checkNumber = startOfRange; checkNumber <= endOfRange; checkNumber++) {
  let isPrime = divisor > 1;
  while (divisor < a && isPrime) {
    if (a % divisor === 0 && a !== 2) {
      isPrime = false;  
    }
    divisor++;
  }
    
  if (isPrime) {
    console.log(divisor);
  }  
}


// for(let checkNum = startOfRange;checkNum <= endOfRange;checkNum++) {
//   let isPrime = true;

//   if(checkNum === 0 || checkNum === 1) {
//     isPrime = false;
//   } else {

//     for(let divisor = 2;divisor < checkNum;divisor++){
//       if(checkNum % divisor === 0 && checkNum !== 2) {
//         isPrime = false;
//         break;
//       }
//     }
//   }
//   if(isPrime) {
//     console.log(checkNum);
//   }
// }
