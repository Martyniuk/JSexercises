/* Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. */

function check(a, b) {
    return (a == 50 || b == 50) || (a + b == 50);
}


console.log(check(25, 25));
console.log(check(30, 20));
console.log(check(0, 50));
console.log(check(50, 34));
console.log(check(89, 49));

