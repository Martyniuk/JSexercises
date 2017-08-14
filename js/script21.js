/* Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string. */
function concatPy(str) {
    return str === null || str === undefined || str.indexOf('Py') >= 0 ? str : 'Py' + str; 
}

console.log(concatPy("Python"));
console.log(concatPy("thon"));
console.log(concatPy(""));
console.log(concatPy());
console.log(concatPy(null));