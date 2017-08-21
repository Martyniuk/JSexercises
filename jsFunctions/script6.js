/* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. */

function func(str) {
    let strArr = str.split(' '),
        maxLength = strArr.reduce((max, i) => {
        return Math.max(max, i.length); 
    }, 0),
        result = '';
    strArr.forEach(i => {
        if (maxLength === i.length) {
            result = i;
        }
    });
    return result;
}

console.log(func('function that accepts a string'));
console.log(func('parameter and find the longest'));