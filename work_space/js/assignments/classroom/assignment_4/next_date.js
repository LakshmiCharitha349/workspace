/**
 * Implement the `nextDate` function below. Given a date in the format dd-mm-yyyy, 
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format. 
 * This means the first two characters will be digits for the day (e.g., 01, 23), 
 * followed by a hyphen (-), the next two characters will be digits for the month (e.g., 01, 12), 
 * followed by another hyphen, and the remaining four characters will be digits for the year 
 * (any year between 0000 and 9999).
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy), for example, "32-02-2025", 
 * return "Invalid Date".
 */
function nextDate(date) {
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);

  if(day > 31 || month >12 || year > 9999) return "invalid date";

  const result = nextDay(parseInt(day), parseInt(month), parseInt(year));
  
   if(result.includes("invalid date")) {
     return "invalid date";

   }
  return result;
}

function nextDay(day, month, year) {

  if(year < 100) {
    year = "00" + year;
  }

  if (year < 1000) {
    year = "0" + year;
  }

  if (month < 10) {
    month = "0" + month;
  }

  if (day > 31 || day === 0) {
    return "invalid date";
  }

  if (month === "02" && day >= 28) {
    const isLeap = isLeapYear(year);
    
    if (!isLeap && day >= 29) {
      return "invalid date";
    }

    if (isLeap && day > 29) {
      return "invalid date";
    }

    if (isLeap && day === 28) {
      return (day + 1) + "-" + month + "-" + year;
    } else {
      const nextmonthOfDate = nextMonth(day, month, year);
      return "01" + "-" + nextmonthOfDate ;
    }

  }

  if (day === 30) {
    if ((month % 2 !== 0 && month < 8) || month % 2 === 0 && month >= 8) {
      return (day + 1) + "-" + month +  "-" + year;
    } else {
      const nextmonthOfDate = nextMonth(day, month, year);
      return "01" + "-" + nextmonthOfDate;
    }
  }

  if (day === 31) {
    if ((month % 2 !== 0 && month < 8) || month % 2 === 0 && month >= 8) {
      const nextmonthOfDate = nextMonth(day, month, year);
      return "01" + "-" + nextmonthOfDate;
    } else {
      return "invalid date";

    }
  }

  if (day < 10) {
    day = "0" + (day + 1);
    return day + "-" + month + "-" + year;
  }

  return (day + 1) + "-" + month + "-" + year;

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

function nextMonth(day, month, year) {
  if (month > 12 || month === 0) {
    return "invalid date";
  }

  if (month === 12) {
    const nextMonthOfDate = "01"
    const nextYearOfDate = nextYear(year);

    return nextMonthOfDate + "-" + nextYearOfDate;
  }

  month = parseInt(month) + 1;

  if (month < 10) {
    month = "0" + month;
  }

  return month + "-" + year;
}

function nextYear(year) {
  if (year >= 9999 || year === 0) {
    return "invalid date";
  }

  year = parseInt(year) + 1;

  if(year < 10) {
    return "0" + year;
  }

  if(year < 100) {
    return "00" + year;
  }

  if (year < 1000) {
    return "0" + year;
  }

  return year;
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
  testNextDate("15-03-2021", "16-03-2021", "normal day");
  testNextDate("01-02-0999", "02-02-0999", "normal day");
  testNextDate("32-03-2025", "invalid date", "invalid day");
  testNextDate("31-02-2025", "invalid date", "invalid day");
  testNextDate("28-02-2020", "29-02-2020", "leap year");
  testNextDate("29-02-2020", "01-03-2020", "leap year");
  testNextDate("29-02-2021", "invalid date", " non-leap year");
  testNextDate("28-02-2021", "01-03-2021", " non-leap year");
  testNextDate("31-12-0999", "01-01-1000", " non-leap year");
  testNextDate("31-07-2025", "01-08-2025", " month of july");
  testNextDate("31-03-2025", "01-04-2025", " month of march");
  testNextDate("31-12-0099", "01-01-0100", " century year");
  testNextDate("31-12-0009", "01-01-0010", " century year");
  testNextDate("31-04-0000", "invalid date", " invalid year");
  testNextDate("31-04-2024", "invalid date", " invalid day");
  testNextDate("29-02-2024 ", "01-03-2024", "last day of feb");
  testNextDate("30-02-2024", "invalid date", "last day of feb");
  testNextDate( "31-12-9999 ", "invalid date", "last day of feb");
  testNextDate( "20-13-2025 ", "invalid date", "invalid month");
  testNextDate( "40-12-2025", "invalid date", "invalid day");
  testNextDate("00-00-0000", "invalid date", "invalid day");
  testNextDate( "31-12-0999","01-01-1000", "millineal year");
  testNextDate("31-12-0099", "01-01-0100", "millineal year");
  testNextDate("31-12-0009", "01-01-0010", "millineal year");
  testNextDate("31-12-2999", "01-01-3000", "millineal year");
  testNextDate("31-12-2020 ", "01-01-2021", "last day of year");
  testNextDate("28-02-0100 ", "01-03-0100", "last day of year");
  testNextDate("28-02-2021", "01-03-2021", "last day of year");
  testNextDate("29-02-2020", "01-03-2020", "last day of year");
  testNextDate("28-02-2020 ", "29-02-2020", "last day of year");
  testNextDate( "30-04-2020 ", "01-05-2020", "last day of year");
  testNextDate( "31-01-2020 ", "01-02-2020", "last day of year");
  testNextDate( "30-01-2020 ","31-01-2020", "last day of year");
  testNextDate("15-03-2021" , "16-03-2021", "last day of year");
  
}

testCases();