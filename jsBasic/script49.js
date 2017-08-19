/* Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  */
function charReplace(str) {
    let strArr = str.split(''),
        result = [];
    strArr.forEach(i => {
        let tmp = i.charCodeAt();
        if (tmp >= 48 && tmp <= 57) {
            result.push(String.fromCharCode(tmp));
        } else {
            result.push(String.fromCharCode(tmp + 1));
        }
    })
    return result.join('');
}

console.log(charReplace("abcd"));
console.log(charReplace("w3resource"));