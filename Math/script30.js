//Write a JavaScript function to cast a square root of a number to an integer.

/*
Test Data : 
console.log(sqrt_to_int(17));
4
*/

function sqrt_to_int(number) {
    return Math.round(Math.sqrt(number));
}