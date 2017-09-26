//Write a JavaScript function to convert a positive number to negative number.

function positiveToNegative(number) {
    if (typeof number !== 'number') return `${number} is not a number`;
    return -number;
}