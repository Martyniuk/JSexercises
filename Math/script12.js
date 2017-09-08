// Write a JavaScript function to find out if a number
// is a natural number or not.
/* 
Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ... 
No negative numbers and no fractions.
Test Data :
console.log(is_Natural(-15)); 
console.log(is_Natural(1)); 
console.log(is_Natural(10.22)); 
console.log(is_Natural(10/0));
Output :
false 
true 
false 
false
 */

function naturalNumber(n) {
    if(!isNumeric(n)) {
        return 'not a number';
    } else {
        return n >= 0.0 && (Math.floor(n) === n);
    }
}

function isNumeric(n) {
    return  !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(naturalNumber(-15)); 
console.log(naturalNumber(1)); 
console.log(naturalNumber(10.22)); 
console.log(naturalNumber(10/0));

/* function is_natural(s) {
    var n = parseInt(s, 10);

    return n >= 0 && n.toString() === s;
} 
*/