/* Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.  */

function checkRepeating(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            counter++;
        }
    }
    if (counter >= 2 && counter <= 4) {
        return true;
    } else {
        return false;
    }
}

console.log(checkRepeating("Python", "y"));
console.log(checkRepeating("JavaScript", "a"));
console.log(checkRepeating("Console", "o"));