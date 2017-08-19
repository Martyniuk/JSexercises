/* Write a JavaScript program to swap the first and last elements of a given array of integers.
The array length should be at least 1. */
function func(arr) {
    if (arr < 1) return 'too small';
    let fEl = arr.splice(0, 1, arr[arr.length - 1]),
        lEl = arr.splice(arr.length - 1, 1, fEl[0]);

    return arr;
}

console.log(func([1, 2, 3, 4]));  
console.log(func([0, 2, 1]));  
console.log(func([3])); 