/* Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223  */
function func(n) {
    return n.toString().split('').reverse().join('');
}

console.log(func(32243));