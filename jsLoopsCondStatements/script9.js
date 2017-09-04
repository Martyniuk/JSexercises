/*
Write a JavaScript program to find the armstrong numbers of 3 digits. 
Note : An Armstrong number of three digits is an integer such that the
 sum of the cubes of its digits is equal to the number itself. For example,
  371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
*/

function armstrong(n) {
    let transformed = n.toString()
                     .split('')
                     .map(i => Math.pow(i, 3))
                     .reduce((sum, i) => sum += i);

    return n === transformed;
}

console.log(armstrong(371));