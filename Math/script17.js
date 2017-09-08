// Write a JavaScript function to 
// calculate the sum of values in an array.

function sumCalculation(array) {
    /* let sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number')  {
            array[i] = 0;
        }
        sum += array[i];
    }
    return sum;
 */
    return array.reduce((sum, i) => {
        if (typeof i !== 'number')  {
            i = 0;
        }
        return sum += i
    }, 0);
}

console.log(sumCalculation([1, 2, 3]));
console.log(sumCalculation([100, -200, 3]));
console.log(sumCalculation([1, 2, 'a', 3]))