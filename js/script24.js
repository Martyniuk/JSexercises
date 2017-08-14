/* Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.  */
function strMod(str) {
    let result = '',
        fCharacter = str.charAt(0);
    return fCharacter + str + fCharacter;
}

console.log(strMod('a'));
console.log(strMod('ab'));
console.log(strMod('abc'));