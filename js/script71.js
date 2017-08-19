/* Write a JavaScript program to check if 1 appears in first or last position of a given array of integers.
The array length must be greater or equal to 1. */
function func(arr) {
    if (arr.length < 1) return false;
    if (arr[0] == 1 || arr[arr.length - 1] == 1) {
        return true;
    } else {
        return false;
    }
}

console.log(func([1, 3, 5]));
console.log(func([1, 3, 5, 1]));
console.log(func([2, 4, 6]));