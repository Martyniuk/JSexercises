/* Write a JavaScript program to move last 
three character to the start of a given string. The string length must be greater or equal to three.  */

function lastThreeCharsToBeginning(str) {
    if (str < 3) return str;
    let tmp = str.slice(-3);
    return tmp + str.slice(0,-3);
}

console.log(lastThreeCharsToBeginning('tatywo lol'));
console.log(lastThreeCharsToBeginning('string for test'));
console.log(lastThreeCharsToBeginning('cut me totaly'));