//Write a JavaScript function to test if a number is a power of 2.
function powerOf2(number) {
    return Math.sqrt(number) % 2 === 0;
}

console.log(powerOf2(16)); 
console.log(powerOf2(18)); 
console.log(powerOf2(256));