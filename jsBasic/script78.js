/* Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.  */
function func(arr) {
    if (arr.length < 2) return `array --> ${arr} is less then 2`;
    return arr.reduce((result, i) => {
        if (i === 1 || i === 3) result = false;
        return result;
    }, true);
}

console.log(func([4, 3, 6, 7, 1]));
console.log(func([4, 5, 3, 7]));
console.log(func([4, 5, 6, 7]));
console.log(func([4, 5, 6, 7]));