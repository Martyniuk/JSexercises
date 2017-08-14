/* Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range. */

function rangeOfNumbersCheck(a ,b) {
    return (a >= 50 && a <= 99) 
           ||
           (b >= 50 && b <= 99) ? true : false;
}

console.log(rangeOfNumbersCheck(28, 67));
console.log(rangeOfNumbersCheck(67, 28));
console.log(rangeOfNumbersCheck(-5, 0));
console.log(rangeOfNumbersCheck(90, 50));