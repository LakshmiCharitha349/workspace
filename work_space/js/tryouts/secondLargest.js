const num1 = 1;
const num2 = 3;
const num3 = 2;
let secondLarge;
let big1 = ( num1 > num2) ? num1 : num2;
let big2 = ( num2 > num3) ? num2 : num3;
if(big1 === big2){
  secondLarge = num1 > num3 ? num1 : num3;
} else {
  secondLarge = (big1 < big2) ? big1 : big2;
}

console.log("second largest number is",secondLarge);



