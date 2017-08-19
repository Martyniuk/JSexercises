/* Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15. */

function numbersCompare(a, b) {
    let sum = a + b,
        diff = Math.abs(a - b);
    if (a === 15 || b === 15 || sum === 15 || diff === 15) {
        return true;
    } else {
        return false;
    }
}

console.log(numbersCompare(15, 9));
console.log(numbersCompare(25, 15));
console.log(numbersCompare(7, 8));
console.log(numbersCompare(25, 10));
console.log(numbersCompare(5, 9));
console.log(numbersCompare(7, 9));
console.log(numbersCompare(9, 25));