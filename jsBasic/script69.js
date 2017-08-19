/* Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  */
function func(arr) {
    return arr.reduce((sum, i) => {
        return sum += i;
    }, 0)
}

console.log(func([10, 32, 20]));  
console.log(func([5, 7, 9])); 
console.log(func([0, 8, -11]));