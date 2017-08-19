/* Write a JavaScript program to check if a string starts with 'Java' and false otherwise.*/

function strCheck(str) {
    if (str.length < 4) return false;
    var java = 'Java';
    if (str.indexOf(java) == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(strCheck("JavaScript"));
console.log(strCheck("Java"));
console.log(strCheck("Python"));