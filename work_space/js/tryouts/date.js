function nextDate(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, 10));

  let nextDay = nextDayOfDate(day, month, year);
  let nextMonth = nextMonthOfDate(day, month, year);
  const nextYear = nextYearOfDate(day, month, year);

  const finalDate = nextDay + "-" + nextMonth + "-" + nextYear;

  if (finalDate.includes("Invalid Date")) {
    return "Invalid Date";
  }

  nextDay = nextDay < 10 ? "0" + nextDay : nextDay;
  nextMonth = nextMonth < 10 ? "0" + nextMonth : nextMonth;

  return nextDay + "-" + nextMonth + "-" + nextYear;

}

function isLeapYear(checkingYear) {

  if (checkingYear === 0) {
    return false;
  }

  const isDivisibleBy4 = checkingYear % 4 === 0;
  const isDivisibleBy100 = checkingYear % 100 === 0;
  const isDivisibleBy400 = checkingYear % 400 === 0

  const isLeap = (isDivisibleBy4 && !isDivisibleBy100) || isDivisibleBy400;

  return isLeap;
}

function nextDayOfDate(day, month, year) {
  if (day === 0 || day > 31) {
    return "Invalid Date";
  }

  if (month === 2 && day >= 28) {

    const isLeap = isLeapYear(year);

    if (isLeap && day >= 30 || !isLeap && day >= 29) {
      return "Invalid Date";
    }

    if (isLeap && day === 28) {
      return day + 1;
    }

    if (!isLeap && day === 28 || isLeap && day === 29) {
      return 1;
    }

  }

  if (day === 30) {
    if (!isMonthWith30Days(month)) {
      return day + 1;
    }

    return 1;
  }

  if (day === 31) {
    if (isMonthWith30Days(month)) {
      return "Invalid Date";
    }

    return 1;
  }

  return day + 1;
}

function nextMonthOfDate(day, month, year) {
  if (month === 0 || month > 12) {
    return "Invalid Date";
  }

  if (day === 31 && month === 12) {
    return 1;
  }

  if (day === 31) {
    return month + 1;
  }

  if ((isLeapYear(year) && day === 29) || !isLeapYear(year) && day === 28) {
    return month + 1;
  }

  if (isMonthWith30Days(month) && day === 30) {
    return month + 1;
  }

  if (!isMonthWith30Days(month) && day === 31) {
    return month + 1;
  }

  return month;
}

function nextYearOfDate(day, month, year) {
  if (year === 0 || year > 9999) {
    return "Invalid Date";
  }

  if (year === 9999 && month === 12 && day === 31) {
    return "Invalid Date";
  }

  if (day === 31 && month === 12) {
    year = year + 1;
  }

  if (year < 10) {
    return "00" + year;
  }

  if (year < 100) {
    return "00" + year;
  }

  if (year < 1000) {
    return "0" + year;
  }

  return year;
}

function isMonthWith30Days(month) {
  return month % 2 == 0 && month < 8 || month % 2 !== 0 && month >= 8;
}

function displayMessage(date, result, expected, gist) {

  const resultSymbol = result === expected ? "✅" : "❌";
  let message = "";

  if (resultSymbol === "✅") {
    message = resultSymbol + gist;
  } else {
    const descriptionFragment = "Gist:" + gist + "\n";
    const inputFrag = "\n" + '[' + date + ']' + "\n";
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

function testCases() {
  testNextDate("01-01-2025", "02-01-2025", "normal day");
  testNextDate("30-04-2020 ", "01-05-2020", "end of the month with 30 days");
  testNextDate("31-01-2020 ", "01-02-2020", "end of the month with 31 days");
  testNextDate("31-12-2024", "01-01-2025", "end of year");
  testNextDate("28-02-2020", "29-02-2020", "leap year");
  testNextDate("29-02-2020", "01-03-2020", "leap year");
  testNextDate("29-02-2021", "Invalid Date", " non-leap year");
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
  testNextDate("31-12-2999", "01-01-3000", "millineal year");
  testNextDate("31-12-2020 ", "01-01-2021", "last day of year");
  testNextDate("31-04-0000", "Invalid Date", " Invalid Date");
  testNextDate("31-04-2024", "Invalid Date", " Invalid Dateof month with 30 days");
  testNextDate("31-12-9999 ", "Invalid Date", "Invalid Dateof feb");
  testNextDate("20-13-2025 ", "Invalid Date", "Invalid Dateh");
  testNextDate("40-12-2025", "Invalid Date", "Invalid Date");
  testNextDate("00-00-0000", "Invalid Date", "Invalid Date");
  testNextDate("31-02-2024", "Invalid Date", "Invalid Date");
  testNextDate("32-03-2025", "Invalid Date", "Invalid Date");
  testNextDate("31-02-2025", "Invalid Date", "Invalid Date");
}

testCases();