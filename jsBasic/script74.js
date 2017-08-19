/* Write a JavaScript program to find the larger value between the first or last and set all the other elements 
with that value. Display the new array. */
function func(arr) {
    let largerValue = Math.max(arr[0], arr[arr.length - 1]),
        tmpArr = arr.slice(1, -1);
    let result = tmpArr.map((i) => {
        return i = largerValue;
    });
    result.push(arr[arr.length - 1]);
    result.unshift(arr[0]);
    return result;
}

console.log(func([20, 30, 40]));
console.log(func([-7, -9, 0]));
console.log(func([12, 10, 3]));