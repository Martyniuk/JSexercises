/* Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20. */

function numbersCheck(a, b, c) {
    if (a === b && a === c && b === c) {
        return 30;
    } else if ((a === b && a !== c) ||
               (a === b && b !== c) ||
               (c === a && c !== b) || 
               (c === b && c !== a)) {
        return 20;
    } else {
        return 40;
    }
}

console.log(numbersCheck(8, 8, 8));
console.log(numbersCheck(8, 8, 18));
console.log(numbersCheck(8, 7, 18));