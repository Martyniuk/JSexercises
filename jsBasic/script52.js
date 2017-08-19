/* Write a JavaScript program to convert the letters of a given string in alphabetical order. */
function strSorting(str) {
    return str.split('').sort().join('');
}

console.log(strSorting("Python"));

console.log(strSorting("Exercises"));