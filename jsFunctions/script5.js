/* Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the string in upper case. */
function func(str) {
    let strArr = str.split(' ');
    return strArr.map(i => {
        let fChar = i.slice(0, 1),
            rest = i.slice(1);
            return fChar.toUpperCase() + rest;
    }).join(' ');
}

console.log(func('converts the first letter of each'));