/* Write a JavaScript program to create a new array taking the middle elements of the 
two arrays of integer and each length 3. */

function func(arr1, arr2) {
    let result = [];
    arr1.slice(1, -1).forEach(i => {
        result.push(i);
    });
    arr2.slice(1, -1).forEach(i => {
        result.push(i);
    });
    return result;
}

console.log(func([1, 2, 3], [1, 5, 6]));  
console.log(func([3, 3, 3], [2, 8, 0]));  
console.log(func([4, 2, 7], [2, 4, 5])); 