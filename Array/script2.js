// Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0])); 
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0] 
// [1, 2, [4, 0]]

function array_Clone(arr) {
    // return arr.slice(0);
    return [...arr];
}