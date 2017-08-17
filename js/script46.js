/* Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.  */

function numbersCheck(a) {
   return (a % 7 === 0 || x % 11 === 0) && (x % 7 !== x % 11);
}

console.log(numbersCheck(14));
console.log(numbersCheck(22));
console.log(numbersCheck(17));
console.log(numbersCheck(120));