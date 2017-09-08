//Write a JavaScript function 
//to round a number to a given decimal places.

function preciseRound(number, placeToRoundTo) {
    return number.toFixed(placeToRoundTo);
}

console.log(preciseRound(12.375,2)); 
console.log(preciseRound(12.37499,2)); 
console.log(typeof preciseRound(-10.3079499, 3));