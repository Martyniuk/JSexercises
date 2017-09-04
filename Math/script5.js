//Write a JavaScript function to format a number up to specified decimal places.

function decimals(number, precision) {
    return number.toFixed(precision);
}

console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));