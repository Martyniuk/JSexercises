/* Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.  */
function nearest(a, b) {
    let aDiff = 100 - a,
        bDiff = 100 - b;
    if (aDiff > bDiff) {
        return b;
    } else {
        return a;
    }
}

console.log(nearest(22,43));
console.log(nearest(0, 4));
console.log(nearest(76, 54));
console.log(nearest(90, 92));