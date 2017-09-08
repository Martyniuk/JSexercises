//Write a JavaScript program to evaluate binomial coefficients.

/* 
Note : 
Binomial coefficient : According to Wikipedia - 
In mathematics, binomial coefficients are a family of
 positive integers that occur as coefficients in the
  binomial theorem. They are indexed by two nonnegative integers;
   the binomial coefficient indexed by n and k.
    Under suitable circumstances the value of the coefficient
     is given by the expression : 
binomial coefficients 
Arranging binomial coefficients
 into rows for successive values of n,
  and in which k ranges from 0 to n,
   gives a triangular array called Pascal's triangle.

Test Data :
console.log(binomial(8,3)); 
console.log(binomial(10,2));
Output :
56 
45
*/

/* function binomialCoef(a, b) {    
   return factorial(b) / factorial(a) * factorial(b - a);
}

function factorial(number) {
    let result = 1;
    for (var i = 1; i <=number; i++) {
        result *= i;
    }
    return result;
} */

function binomial(n, k) {
    if ((typeof n !== 'number') || (typeof k !== 'number')) 
 return false; 
   var coeff = 1;
   for (var x = n-k+1; x <= n; x++) coeff *= x;
   for (x = 1; x <= k; x++) coeff /= x;
   return coeff;
}


console.log(binomial(8,3)); 
console.log(binomial(10,2));
