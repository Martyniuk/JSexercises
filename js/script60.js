/* Write a JavaScript program to create a new string without the first and last character of a given string. */

function stringWithoutFirstLastChars(str) {
    if (str.length <= 2) return str;
    return str.slice(1,-1);
}


console.log(stringWithoutFirstLastChars('JavaScript'));
console.log(stringWithoutFirstLastChars('JS'));
console.log(stringWithoutFirstLastChars('PHP'));