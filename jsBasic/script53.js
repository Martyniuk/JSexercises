/* Write a JavaScript program to check if the
 characters a and b are separated by exactly 3 places anywhere (at least once) in a given string. */

function spacesBeetwenCharactersInString(str, a, b) {
    let strArr = str.split(''), // ['a', ' ', ' ']
        fChar = str.indexOf(a),
        sChar = str.indexOf(b),
        counter = 0;
    for (let i = fChar; i < sChar; i++) {
        if (strArr[i] === ' ') counter++;
    }
    return counter === 3;
}

console.log(spacesBeetwenCharactersInString("Chai   nsbreak", 'i', 'n'));
console.log(spacesBeetwenCharactersInString("pane borrowed"));
console.log(spacesBeetwenCharactersInString("abCheck"));