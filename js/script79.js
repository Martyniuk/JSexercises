/* Write a JavaScript program to test if a given array of integers contains 30 and 40 twice.
The array length should be 0, 1, or 2.  */

function func(arr) {
    if (arr.length > 2) return 'ogo...';
    let counter30 = 0,
        counter40 = 0;
    return arr.reduce((result, i) => {
        if (i === 30) counter30++;
        if (i === 40) counter40++;
        if (counter30 >= 2 || counter40 >= 2) 
            return result = true;
        return result;
    }, false)
}

console.log(func([30, 30]));
console.log(func([40, 40]));
console.log(func([20, 20]));
console.log(func([30]));