/* Write a JavaScript function that checks whether a passed string is palindrome or not?  */

function func(str) {
    console.log(str.split('').reverse().join(''));
    return str === str.split('').reverse().join('');
}


console.log(func('madam'));
console.log(func('nurses run'));
console.log(func('fox'));