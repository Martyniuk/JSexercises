//Write a JavaScript function to get the greatest common divisor (gcd) of two integers.

function GCD(a, b) {
    while (a !== b) {
        a > b ? a = a - b : b = b - a;
    }
    return a;
}

console.log(GCD(12, 13)); 
console.log(GCD(9, 3)); 