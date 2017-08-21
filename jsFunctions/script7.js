/* Write a JavaScript function that accepts a string as a parameter 
and counts the number of vowels within the string. */

function func(str) {
    let strArr = str.split('');
    return strArr.reduce((counter, i) => {
        if (i.charCodeAt() == 97 ||
            i.charCodeAt() == 101 ||
            i.charCodeAt() == 121 ||
            i.charCodeAt() == 111 ||
            i.charCodeAt() == 105 ||
            i.charCodeAt() == 117) {
            counter++;
        }
        return counter;
    }, 0);
}

console.log(func('function'));