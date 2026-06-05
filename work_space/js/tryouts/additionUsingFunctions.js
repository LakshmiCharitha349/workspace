function add(a,b) {
  return a + b;
}

// const sum = add(2,3);
// console.log(sum);

function cube(num) {
  return num * num * num;
}

function isDivisibleBy2(x) {
  return x % 2 === 0;
}

function max(a,b) {
  return a > b ? a : b;
}

function min(a,b) {
  return a < b ? a : b;
}

function maxOf3(a,b,c) {
  return max(max(a,b),c);
}
//given number is between 2 numbers
// given 2 points and find distance between them
//second largest number among 3 numbers
//write a power fn
//2 strings find if a substring  is from string

function secondlargest(a,b,c) {
  if(a === b || b === c) {

  }
  if(max(a,b) === max(b,c))
    return max(a,c);
  else {
    return min(max(a,b), max(b,c));
  }
}

function secondlargestCopy(a,b,c) {
  const max1 = max(a,b);
  const max2 = max(b,c);
  if(max1 === max2)
    return b === c ? min(a,c) : max(a,c);
  else {
    return min(max1,max2);
  }
}





//given number is between 2 numbers
function isBetween2Nums(x,startOfrange,endOfRange) {
  let isBetween = false;
  if (0) {
    isBetween = true;
  }
  return isBetween;
}

//power function
function power(base,power) {
  let result = 1;
  while(power > 0) {
    result = base * base;
  }
  return result;
}

function powerCopy(base,power) {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return base;
  } else {
    return base * powerCopy(base,power - 1);
  }
}

//given 2 points and find distance between them

function findDistanceBtwnPoints(d1,d2) {
  return power(d1,2) + power(d1)
}