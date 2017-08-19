/* Write a JavaScript program to create a new string of specified copies (positive number) of a given string.  */

function copying(str, numbers) {
    if (numbers <= 0) {
        return false;
    }
    /* let res = '';
    for (var i = 0; i < numbers; i++) {
        res += str;
    }
    return res; */
    return str.repeat(numbers);
}

console.log(copying("abc", 5));
console.log(copying("abc", 0));
console.log(copying("abc", -2));