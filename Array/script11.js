//Write a JavaScript program to find the sum of squares of a numeric vector.
// not my realization

function sum_sq(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }