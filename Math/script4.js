// Write a JavaScript function to generate a random integer.
function generateRandom(min, max) {
    if (min == undefined && max == undefined) {
        return 0;
    }
    if (max == undefined && min != undefined) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));    
}

console.log(generateRandom(20,1)); 
console.log(generateRandom(1,10)); 
console.log(generateRandom(6)); 
console.log(generateRandom()); 