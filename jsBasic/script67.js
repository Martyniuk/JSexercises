/* Write a JavaScript program to create a new string from a given string,
 removing the first and last characters of the string if the first or last character are 'P'.
 Return the original string if the condition is not satisfied. */
function strModifier(str) {
    let fChar = str.slice(0, 1),
        lChar = str.slice(-1);
    if (fChar.toUpperCase() === 'P' || lChar.toUpperCase() === "P") return str.slice(1, -1);
    return str;
}

console.log(strModifier('koko'));
console.log(strModifier('lolipop'));
console.log(strModifier('lolipoP'));