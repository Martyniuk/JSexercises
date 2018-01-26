// Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource')); 
// console.log(is_array([1, 2, 4, 0]));
// false
// true

function isArray (input) {
    return Object.prototype.toString.call(input).slice(8,-1) === 'Array';
}