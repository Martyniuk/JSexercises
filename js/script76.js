/* Write a JavaScript program to create a new array taking the first and last elements 
from a given array of integers and length must be greater or equal to 1. */

function func(arr) {
    if (arr.length < 1) return arr;
    let result = [];
    result.push(arr[0]);
    result.push(arr[arr.length - 1]);
    return result;
}

console.log(func([]));
console.log(func([2, 3]));
console.log(func([0, 56, 2, 3]));