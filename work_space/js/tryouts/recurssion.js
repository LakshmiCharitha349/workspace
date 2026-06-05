// f(x) = x + f(x - 1);
// f(0) = 0

// sum of numbers
function f(x) {
  if (x === 0) return 0;

  return x + f(x - 1);
}

//factorial of a number
function f(x) {
  if (x === 1) return 1;

  return x * f(x - 1);
}

//power of a number
function f(base, power) {
  if (power === 1) return base;

  return base * f(base, power - 1);
}

//reverse of string
function reverse(string, length) {
  if(length === 0) return "";

  return string[length - 1] + reverse(string, length - 1); 
}



