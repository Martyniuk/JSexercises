/* Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. */

function ifYearIsLeap(year) {

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

console.log(ifYearIsLeap(prompt('enter a year','')));