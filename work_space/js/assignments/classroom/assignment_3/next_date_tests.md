 | Description | Input | Output |
| --- | --- | --- |
| Simple increment of a normal day | 15-03-2021 | 16-03-2021 |
| increment of a day of month of 31 days | 30-01-2020 | 31-01-2020 |
| increment the last day of the month that has 31 days  | 31-01-2020 | 01-02-2020 |
| increment the last day of the month that has 30 days  | 30-04-2020 | 01-05-2020 |
| increment of day in febraury in leap year | 28-02-2020 | 29-02-2020 |
| increment of last day of febraury in a leapyear | 29-02-2020 | 01-03-2020 |
| increment of a last  day of febraury in non-leap year | 28-02-2021 | 01-03-2021 |
| increment of febraury  last day in non-leap century year | 28-02-0100 | 01-03-0100 |
| increment last day of the year | 31-12-2020 | 01-01-2021 |
| increment of a last day of millineal year | 31-12-2999 | 01-01-3000 | 
| last day of a decade  | 31-12-0009  | 01-01-0010 |
| last day of centuary year | 31-12-0099  |01-01-0100 |
| last day of millineal year | 31-12-0999  |01-01-1000 |
| invalid day, month, year | 00-00-0000 | "invalid date" | 
| range of days exceeded in input | 40-12-2025 | "invalid date" | 
| range of month exceeded in input | 20-13-2025 | "invalid date" | 
| range of year is exceeded in input  | 31-12-9999  | "invalid date" |
| invalid day of  the febraury month of a leap year as input | 30-02-2024 | "invalid date" |
| invalid day of  the febraury month of a non-leap year as input | 29-02-2023 | "invalid date" |
| invalid day of months that has 30 days as input  | 31-04-2024  | "invalid date" |
| invalid year as input  | 31-04-0000  | "invalid date" |