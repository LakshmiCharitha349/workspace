function nextDate(date) {
  return nextDateOfCalender(date);
}

function nextDateOfCalender(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, 10));

  return calculateNextDate(day, month, year);
}

function calculateNextDate(day, month, year) {
  if (!isValid(day, month, year)) {
    return "Invalid Date";
  }

  if (isLastDayofYear(day, month)) {
    return formatDate(1, 1, year + 1);
  }

  if (isEndOfTheMonth(day, month, year)) {
    return formatDate(1, month + 1, year);
  }

  return formatDate(day + 1, month, year);
}

function isEndOfTheMonth(day, month, year) {
  const lastDay = numOfDaysMonth(month, year);

  return day === lastDay;
}

function numOfDaysMonth(month, year) {

  switch (month) {
    case 2:
      return isLeap(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}

function isLeap(checkingYear) {
  if (checkingYear === 0) {
    return false;
  }

  const isDivisibleBy4 = checkingYear % 4 === 0;
  const isDivisibleBy100 = checkingYear % 100 === 0;
  const isDivisibleBy400 = checkingYear % 400 === 0;
  const isLeap = (isDivisibleBy4 && !isDivisibleBy100) || isDivisibleBy400;

  return isLeap;
}

function isValid(day, month, year) {
  const isValidDay = isDay(day, month, year);
  const isValidMonth = isMonth(month);
  const isValidYear = isYear(day, month, year);

  return isValidDay && isValidMonth && isValidYear;
}

function isDay(day, month, year) {
  if (day > numOfDaysMonth(month, year)) {
    return false;
  }

  return day > 0;
}

function isMonth(month) {
  return month > 0 && month <= 12;
}

function isYear(day, month, year) {
  if (day === 31 && month === 12 && year === 9999) {
    return false;
  }

  return year >= 0 && year <= 9999;
}

function isLastDayofYear(day, month) {
  return day === 31 && month === 12;
}

function formatDate(day, month, year) {
  const paddingOfDay = paddingDate(day, 2);
  const paddingOfMonth = paddingDate(month, 2);
  const paddingOfYear = paddingDate(year, 4);

  return `${paddingOfDay}-${paddingOfMonth}-${paddingOfYear}`;
}

function paddingDate(date, lengthOfdate) {
  return date.toString().padStart(lengthOfdate, "0");
}

function displayMessage(date, result, expected, gist) {
  const resultSymbol = result === expected ? "✅" : "❌";
  let message = "";

  if (resultSymbol === "✅") {
    message = resultSymbol + gist;
  } else {
    const descriptionFragment = "Gist:" + gist + "\n";
    const inputFrag = "\n" + date + "\n";
    const actualFragment = "Result:" + result + "\n";
    const expectedFragment = "Expected:" + expected + "\n";

    message = resultSymbol + descriptionFragment;
    message += inputFrag;
    message += actualFragment + expectedFragment;
  }

  console.log(message);
}

function testNextDate(date, expected, gist) {
  const result = nextDate(date);

  displayMessage(date, result, expected, gist);
}

function testCases1() {
  testNextDate("01-01-2025", "02-01-2025", "normal day");
  testNextDate("30-04-2020 ", "01-05-2020", "end of month with 30 days");
  testNextDate("31-01-2020 ", "01-02-2020", "end of month with 31 days");
  testNextDate("31-12-2024", "01-01-2025", "end of year");
  testNextDate("28-02-2020", "29-02-2020", "leap year");
  testNextDate("29-02-2020", "01-03-2020", "leap year");
  testNextDate("28-02-2021", "01-03-2021", " non-leap year");
  testNextDate("31-12-0999", "01-01-1000", " non-leap year");
  testNextDate("31-07-2025", "01-08-2025", " month of july");
  testNextDate("31-03-2025", "01-04-2025", " month of march");
  testNextDate("28-02-2021", "01-03-2021", "end of feb in non-leap year");
  testNextDate("29-02-2020", "01-03-2020", "end of feb in leap year");
  testNextDate("28-02-2020 ", "29-02-2020", "end of feb in leap year");
  testNextDate("31-12-0999", "01-01-1000", "millineal year");
  testNextDate("31-12-0099", "01-01-0100", "end of centuary");
  testNextDate("31-12-0009", "01-01-0010", "end of dacade");
}

function testCases2() {
  testNextDate("31-12-2999", "01-01-3000", "millineal year");
  testNextDate("31-12-2020 ", "01-01-2021", "last day of year");
  testNextDate("29-02-2021", "Invalid Date", "non-leap year");
  testNextDate("31-04-0000", "Invalid Date", "Invalid Date");
  testNextDate("31-12-9999 ", "Invalid Date", "Invalid Day of feb");
  testNextDate("20-13-2025 ", "Invalid Date", "Invalid Month");
  testNextDate("40-12-2025", "Invalid Date", "Invalid Day");
  testNextDate("00-00-0000", "Invalid Date", "Invalid Day");
}

function main() {
  testCases1();
  testCases2();
}

main();