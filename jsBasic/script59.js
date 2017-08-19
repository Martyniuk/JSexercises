/* Write a JavaScript program to extract the first half of a string of even length. */

function chopOffStr(str) {
    if (str.length % 2 === 0) {
        return str.slice(0, str.length / 2);
    }
    return str;
}

console.log(chopOffStr("Python"));  
console.log(chopOffStr("JavaScript")); 
console.log(chopOffStr("PHP"));