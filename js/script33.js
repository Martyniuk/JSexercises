/* Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive. */
function rangeCheck(a ,b) {
    let ifATrue = false,
        ifBTrue = false;
    if ((a >= 40 && a <= 60) || (a >= 70 && a <= 100)) {
        ifATrue = true;
    }
    if ((b >= 40 && b <= 60) || (b >= 70 && b <= 100)) {
        ifBTrue = true;
    } 
    return ifATrue && ifBTrue;
}

console.log(rangeCheck(44, 56));
console.log(rangeCheck(70, 95));
console.log(rangeCheck(50, 89));