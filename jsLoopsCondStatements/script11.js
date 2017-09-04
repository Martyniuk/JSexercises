// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. 

function GCD(a, b) {
    let res = 0;
    while (a != b) {
        a > b ? a = a - b : b = b - a;
    }
    res = a;
    return res;
}

console.log(GCD(4,3));
console.log(GCD(3,3));
console.log(GCD(3,4));