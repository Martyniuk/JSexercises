/* Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. */

function func(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

console.log(func(37));