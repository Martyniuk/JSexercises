/* Write a JavaScript function which says whether a number is perfect. */
/* According to Wikipedia : In number theory, a perfect number is a positive integer that is equal
 to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding 
 the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number 
 that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: 
( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by 
the perfect numbers 496 and 8128. */

function func(n) {
    if (n <= 0) return `"nine"`; // validation
    let arr = []; // creating empty folder
    for (let i = 1; i < n; i++) {
        arr.push(i);
    } // filled in folder with values
    let sumOfFilteredDividers =
        arr.reduce((resultingArr, i) => {
            if (n % i == 0) {
                resultingArr.push(i);
            }
            return resultingArr;
        }, []) // 1st reduce to filter values with zero dividers
            .reduce((sum, i) => {
                return sum += i;
            }, 0); // 2d reduce to sum them up


    return `if ${n} is Perfect number ${sumOfFilteredDividers === n} <--`; // result
}

console.log(func(8128));
console.log(func(28));
console.log(func(0));
console.log(func(6));