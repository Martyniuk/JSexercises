//Write a JavaScript function to find the lowest value in an array.

function min(arr) {
    return arr.reduce((curr, i) => { return Math.min(curr, i); }, arr[0]);
}

console.log(min([12,34,56,1])); 
console.log(min([-12,-34,0,-56,-1]));