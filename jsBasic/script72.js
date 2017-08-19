/* Write a JavaScript program to check if 
the first and last elements are equal of a given array of integers length 3.  */
function func(arr) {
    if (arr.length < 3) return false;
    if (arr[0] === arr[arr.length - 1]) {
        return true;
    } else {
        return false;
    }
}

console.log(func([10, 20, 30])); 
console.log(func([10, 20, 30, 10])); 
console.log(func([20, 20, 20])); 