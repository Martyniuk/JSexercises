// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data : 
// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));
// Expected Output : 
// -2 
// [9, 0, -2] 
// [7, 9, 0, -2]

function last (array, n) {
    try {
        if (array) {
            if (array.length && !n) {
                return array[array.length - 1];
            } else if (array.length && n && Math.abs(n) > 0) {
                const tmp = Math.abs(n) * -1;

                return array.slice(tmp);
            } else {
                return [];
            }
        } else {
            throw new Error('1st Argument is expected to be an Array');
        }
    } catch ({ message }) {
        console.error(message);
    }
}