/* Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case. */

function transform(str) {
    if (str.length < 3) return str.toUppercase();
    let firstThree =  str.slice(0,3).toLowerCase(),
        secondPart = str.slice(3);
    return firstThree + secondPart;
}

console.log(transform("Python"));
console.log(transform("JAVAScript"));