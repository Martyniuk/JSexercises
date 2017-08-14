/* Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7. */
function checkNum(n) {
    return n % 7 == 0 || n % 3 == 0;
}

console.log(checkNum(12));
console.log(checkNum(14));
console.log(checkNum(10));
console.log(checkNum(11));
