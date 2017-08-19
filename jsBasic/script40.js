/* Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8. */
function checker(a, b) {
    let sum = a + b,
        diff = Math.abs(a - b);
    return ((a == 8 || b == 8) || (sum == 8 || diff == 8));
}

console.log(checker(7, 8));
console.log(checker(16, 8));
console.log(checker(24, 32));
console.log(checker(17, 18));