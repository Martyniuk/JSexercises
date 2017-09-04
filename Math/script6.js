//Write a JavaScript function to find the highest value in an array.

function max(arr) {
    return arr.reduce((curr, i) => { return Math.max(curr, i) }, arr[0]);
}

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));