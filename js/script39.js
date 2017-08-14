/* Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.  */

function sum(a, b) {
    let sumAB = a + b;
    if (sumAB >= 50 && sumAB <= 80) return 65;
    return 80;
}

console.log(sum(30,20));
console.log(sum(90,80));