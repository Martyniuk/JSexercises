/* Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range). */
// kto tak opisywaet zadanie....
// solution in below:

function test_digit(x, y) 
  {
    let x_div = parseInt(x / 40),
        x_mod = x % 40,
        y_div = parseInt(y / 40),
        y_mod = y % 40;
    return x_div === y_div || x_mod === y_mod ||
           x_div === y_mod || x_mod === y_div;
  }

console.log(test_digit(40, 4000));  
console.log(test_digit(80, 320));