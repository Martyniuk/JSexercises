//Write a JavaScript function to get the highest number from three different numbers.
/*
Test Data : 
console.log(highest_of_three(-5, 4, 2));
4 
*/

function largestFromThree(a, b, c) {
    return Math.max(...arguments);
}
