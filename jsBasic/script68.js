/* Write a JavaScript program to create a new string using the first and last n characters from a given sting.
The string length must be greater or equal to n.  */
function func(str, n) {
    if (str.length < n) return false;
    /* let fChar = str.slice(0, 1),
        lChar = str.slice(-1),
        result = ''; */
    return str.slice(0, n) + str.slice(-n);
}

console.log(func("JavaScript", 2));
console.log(func("JavaScript", 3));