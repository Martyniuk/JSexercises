
/* Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. */
function diff(n) {
    return n - 13 > 0 ? (n - 13) * 2 : (13 - n);
}

console.log(diff(11));