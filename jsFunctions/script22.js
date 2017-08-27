/* Write a JavaScript function that accepts two arguments, a string and a letter
 and the function will count the number of occurrences of the specified letter within the string. */

function func(str, char) {
    let regExp = new RegExp(char, 'g');
    let arr = str.match(regExp);
    return arr.length;
}

console.log(func('w3resource.com', 'o'));
console.log(func('wlllooppaass', 'l'));
console.log(func('w3resource.comnakurylaaaaaa', 'a'));