/* Write a JavaScript program to test if a string end with "Script".
 The string length must be greater or equal to 6.  */

function func(str) {
    let string = 'Script';
    if (str.length < 6) {
        return str;
    }
    return str.slice(-6) === string;
}

console.log(func('Script'));
console.log(func('loltoTestScript'));
console.log(func('wassuptSrcipt'));
console.log(func('wassSrciptup'));