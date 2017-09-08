// Write a JavaScript
// function to check to check whether a variable is numeric or not.

function isNumeric(potentialNubmer) {
    return  !isNaN(parseInt(potentialNubmer)) && isFinite(potentialNubmer);
}

console.log(isNumeric(12)); 
console.log(isNumeric('abcd')); 
console.log(isNumeric('12')); 
console.log(isNumeric(' ')); 
console.log(isNumeric(1.20)); 
console.log(isNumeric(-200));