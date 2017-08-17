/* Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.  */

function checkNumber(a, b, c) {
    if ((a >= 20 && a < b) || (a >= 20 && a < c)) {
        return true;
    } else if ((b >= 20 && b < a) || (b >= 20 && b < c)) {
        return true;
    } else if ((c >= 20 && c < a) || (c >= 20 && c < b)){
        return true;
    } else {
        return false;
    }
}

console.log(checkNumber(23, 45, 10));
console.log(checkNumber(23, 23, 10));
console.log(checkNumber(21, 66, 75));