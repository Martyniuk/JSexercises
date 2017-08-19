/* Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3. */

function func(arr) {
    if (arr.length < 2) return arr;
    return arr.reduce((res, i) => {
        if (i === 1 || i === 3) res = true;
        return res;
    }, false);
}

console.log(func([4, 3, 6, 7, 1]));
console.log(func([4, 5, 3, 7]));
console.log(func([4, 5, 6, 7]));
console.log(func([4, 5, 6, 7]));