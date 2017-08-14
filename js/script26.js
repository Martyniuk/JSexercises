/* Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.  */

function strMod(str) {
    if (str.length < 3) return false;
    let tmp = str.slice(str.length - 3);
    return tmp + str + tmp;
}

console.log(strMod("abc"));
console.log(strMod("ab"));
console.log(strMod("abcd"));