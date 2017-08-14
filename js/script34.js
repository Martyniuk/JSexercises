/* Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.  */
function larger(a, b) {
    if (a <= 0 || b <= 0) {
        console.error('interegers should be positive');
    }
    if ((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) {
        return Math.max(a,b);
    } else {
        console.error(`numbers are out of range`);
    }
}

console.log(larger(45, 60));
console.log(larger(25, 60));
console.log(larger(45, 80));