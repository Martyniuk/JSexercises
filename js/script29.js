/* Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.  */

function checkNumbersRange(a, b, c) {
    if (a >= 50 && a <= 99 || b >= 50 && b <= 99 || c >= 50 && c <= 99) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumbersRange(50, 90, 99));
console.log(checkNumbersRange(5, 9, 199));
console.log(checkNumbersRange(65, 89, 199));
console.log(checkNumbersRange(65, 9, 199));