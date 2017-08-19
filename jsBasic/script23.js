/* Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1. */

function swap(str) {
    let result = '';
    if (str.length >= 1) {
        let f = str.slice(0, 1);  // 's'
        let l = str.slice(str.length - 1);
        let middle = str.slice(1, str.length - 1);
        result = l + middle + f;
    }
    return result;
}

console.log(swap('das'));