/* Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.  */

function checkPosition(str) {
    let script = 'Script';
    let position = 4;
    if (str.indexOf(script) == position) {
        return str.substr(0, position);
    } else {
        return str;
    }
}

console.log(checkPosition("JavaScript"));
console.log(checkPosition("CoffeeScript"));