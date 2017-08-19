/* Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit */

function digitsCheck(a, b, c) {
    let aToArr = a.toString().split(''),
        aRightDigit = aToArr[aToArr.length - 1];
    let bToArr = b.toString().split(''),
        bRightDigit = bToArr[bToArr.length - 1];
    let cToArr = c.toString().split(''),
        cRightDigit = cToArr[cToArr.length - 1];
    
    if (aRightDigit === bRightDigit || aRightDigit === cRightDigit || bRightDigit === cRightDigit) {
        return true;
    } else {
        return false;
    }
}

console.log(digitsCheck(22,32,42));
console.log(digitsCheck(102,302,2));
console.log(digitsCheck(20,22,45));