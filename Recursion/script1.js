// Write a JavaScript program to calculate the factorial of a number.

function factorial(number) {
    if (number <= 0) return 1;
    return factorial(number - 1) * number;
}

console.log(factorial(5));