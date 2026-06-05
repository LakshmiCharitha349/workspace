/*
  Write a function that converts returnrom one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function convert(from, to, value) {
  // Implementation here.
  const temperature = typeof (value) !== "number" ? value * 1 : value;

  if (from === to) {
    return temperature;
  }

  if (from === 'C' && to === 'K') {
    return convertCelciusToKelvin(temperature);
  }

  if (from === 'C' && to === 'F') {
    return convertCelciusToFharenheit(temperature);
  }

  if (from === 'F' && to === 'K') {
    return convertFharenhitToKelvin(temperature);
  }

  if (from === 'F' && to === 'C') {
    return convertFharenheitToCelcius(temperature);
  }

  if (from === 'K' && to === 'C') {
    return convertKelvinToCelcius(temperature);
  }

  if (from === 'K' && to === 'F') {
    return convertKelvinToFharenheit(temperature);
  }

  return temperature;

}

function convertCelciusToKelvin(value) {
  return value + 273.15;
}

function convertCelciusToFharenheit(value) {
  return value * 1.8 + 32;
}

function convertFharenhitToKelvin(value) {
  return (value - 32) * (5 / 9) + 273.15;
}

function convertFharenheitToCelcius(value) {
  return (value - 32) * (5 / 9);
}

function convertKelvinToCelcius(value) {
  return value - 273.15;
}

function convertKelvinToFharenheit(value) {
  return (value - 273.15) * 1.8 + 32;
}

function isApproximateEqual(actualResult, expectedResult) {
  const isApprox = (actualResult - 0.5) <= expectedResult && (actualResult + 0.5) >= expectedResult;
  return isApprox;
}

function displayMessage(value, actualResult, expectedResult) {
  const isApprox = isApproximateEqual(actualResult, expectedResult);
  const inputFragment = value;
  const resultSymbol = isApprox === expectedResult ? "✅" : "❌";
  const actualFragment = "Result is" + actualResult;
  const expectedFragment = "Expected is" + isApprox;
  
  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);

}

function testConvert(from, to, value, expectedResult) {
  const actualResult = convert(from, to, value);

  displayMessage(value, actualResult, expectedResult);
}

function testCases() {
  testConvert('C', 'K', 0, 273.15);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('F', 'C', -40, -40);
  testConvert('K', 'C', 100, -173.15);
  testConvert('K', 'F', 100, -279.67);
  testConvert('K', 'K', 300, 300);
  testConvert('K', 'K', "273.15", 273.15);
  testConvert('K', 'a', 200, 200);
}

testCases();