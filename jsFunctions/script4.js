/* Write a JavaScript function that returns a passed string with letters in alphabetical order.  */

function func(str) {
    return str.toLowerCase().split('').sort().join('');
}

console.log(func('JavaScript'));
console.log(func('function'));
console.log(func('passed'));
console.log(func('webmaster'));