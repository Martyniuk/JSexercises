/* Write a JavaScript program to rotate the elements left of a given array of integers of length 3.  */
function func(arr) {
    arr.push(arr.shift());
    return arr;
}

console.log(func([3, 4, 5]));  
console.log(func([0, -1, 2]));  
console.log(func([7, 6, 5])); 