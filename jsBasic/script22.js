/* Write a JavaScript program to remove a character at the specified position of a given string and return the new string. */
function remove(str, position) {
    let fPart = str.substring(0, position);
    let sPart = str.substring(position + 1);
    return fPart + sPart;
}

console.log(remove("Python",0));
console.log(remove("Python",3));
console.log(remove("Python",5));
