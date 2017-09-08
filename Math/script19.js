//Create a Pythagorean function in JavaScript.

/* 
Note : The Pythagorean Theorem tells us 
that the relationship in every right triangle 
is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs
 of the triangle. 
Test Data :
console.log(pythagorean_theorem(2, 4)); 
console.log(pythagorean_theorem(3, 4));
Output :
4.47213595499958 
5
*/

function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(pythagoreanTheorem(2, 4)); 
console.log(pythagoreanTheorem(3, 4));