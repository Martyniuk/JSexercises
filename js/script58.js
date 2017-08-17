/* Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string.
 The length of the given string must be 3 and above.  */

function func(str) {
    if (str.length < 3) {
        return 0;
    } else {
        return multiply4(cutLast3Characters(str));
    }
}

function multiply4(str) {
    return str.repeat(4);
}

function cutLast3Characters(str) {
    return str.slice(str.length - 3);
}

console.log(func("Python 3.0"));
console.log(func("JS"));
console.log(func("JavaScript"));