/* Write a JavaScript program to check if the last digit of the three given positive integers is same. */

function coincidence(a, b, c) {
    let aStr = a.toString().split(''),
        bStr = b.toString().split(''),
        cStr = c.toString().split('');
    let charA = aStr[aStr.length - 1],
        charB = bStr[bStr.length - 1],
        charC = cStr[cStr.length - 1];
    return (charA == charB && charA == charC && charC == charB);
}

console.log(coincidence(20, 30, 400));
console.log(coincidence(-20, 30, 400));
console.log(coincidence(20, -30, 400));
console.log(coincidence(20, 30, -400));