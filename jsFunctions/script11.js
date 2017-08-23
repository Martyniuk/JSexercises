/* Write a JavaScript function which will take an array of numbers stored and
find the second lowest and second greatest numbers, respectively. */
function func(arr) {
    const sortedArr = arr.sort((a,b) => a - b);
    console.log(sortedArr); // [1, -2]
    let result = [];
    result.push(sortedArr.splice(1,1));
    result.push(sortedArr.splice(-2,1));
    return {result};
}

console.log(func([1,2,3,4,5]));
console.log(func([1,5, 542, 12, -2, 4, 0]));
console.log(func([1,5, 542, 1290, -2, 4]));