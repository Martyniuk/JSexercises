/* Write a JavaScript program to check from two given integers, if one is positive and one is negative.  */
function check(a, b) {
    return (a < 0 && b > 0) || (b < 0 && a > 0);
}

console.log(check(-2, 4));
console.log(check(2, -4));
console.log(check(2, 0));
console.log(check(2, 1));
console.log(check(-2, -1));

