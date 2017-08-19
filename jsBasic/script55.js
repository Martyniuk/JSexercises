/* Write a JavaScript program to check if a given string contains equal number of p's and t's present.  */

function countPandTinString(str) {
    let strArr = str.toLowerCase().split(''),
        countP = strArr.reduce((counter, i) => {
            if (i.charCodeAt() == 112) counter++;
            return counter;
        }, 0),
        countT = strArr.reduce((counter, i) => {
            if (i.charCodeAt() == 116) counter++;
            return counter;
        }, 0);
        console.log(`p --- > ${countP}`);
        console.log(`t --- > ${countT}`);
    return countP === countT;
}

console.log(countPandTinString('strip'));
console.log(countPandTinString('sttpp'));
console.log(countPandTinString('tttpppp'));
console.log(countPandTinString('wassup dude hows it going - t'));