/* Write a JavaScript program to check if three given numbers (integers) are increasing in strict mode and flag is "false", however if "true" is false the numbers will in soft mode. */

function checkMode(a, b, c, flag) {
    if (flag == true) {
        return a < b && b < c;
    } else {
        return b < c;
    }
}

console.log(checkMode(10,15,31, "True"));
console.log(checkMode(24,22,31, "False"));
console.log(checkMode(22,22,31, "False"));