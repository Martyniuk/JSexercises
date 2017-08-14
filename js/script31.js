/* Write a JavaScript program to find the largest of three given integers */

function max(a,b,c) {
    let tmp = [a,b,c];
    return tmp.reduce(function(max, i) {
        return Math.max(max,i);
    }, a)
}

console.log(max(56, 43, 1));
console.log(max(0, 256, -1));
console.log(max(142, 26, 987));