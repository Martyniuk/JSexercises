/* Write a JavaScript function to compute the factors of a positive integer.  */
function func(n) { //15
    let arr = [],
        result = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    // arr = [1,2,3,4,5,6,7,8,9 ...]
    result = arr.filter(i => {
        return n % i == 0;
    });
    return result;
}

console.log(func(15));  // [1,3,5,15] 
console.log(func(16));  // [1,2,4,8,16] 
console.log(func(17));  // [1,17]