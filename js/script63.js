/* Write a JavaScript program to create a string 
using the middle three characters of a given string of odd length. 
The string length must be greater or equal to three. */


function func(str) {
    if (str.length < 3) {
        return str;
    } else if (str.length % 2 == 0) {
        return str;
    } else {
        let tmp = (str.length + 1) / 2;
        return str.slice(tmp - 2, tmp + 1);
    }
}

console.log(func('hello'));
console.log(func('component'));
console.log(func('com'));
console.log(func('compute'));

console.log(func('abcdefg'));
console.log(func('HTML5'));
console.log(func('Python'));
console.log(func('PHP'));
console.log(func('Exercises'));

//fail