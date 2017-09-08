//Write a JavaScript function 
//to check whether a value is an integer or not.

function isInt(n) {
    if (typeof n !== 'number') return false;
    return n % Math.floor(n) === 0;
}

console.log(isInt(23)); 
console.log(isInt(4e2)); 
console.log(isInt(NaN)); 
console.log(isInt(23.75));
console.log(isInt(-23));