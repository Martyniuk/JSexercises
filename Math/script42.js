// Write a JavaScript function to calculate the combination of n and r.
// The formula is : n!/(r!*(n - r)!).

function combinations(n ,r) {
   const diff = n - r;
   return factorial(n) / (factorial(r) * factorial(diff));
}

function factorial (a) {
 return (a != 1) ? a * factorial(a - 1) : 1;
}
