/* Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.  */

function deff(n) {
    return n > 19 ? (n - 19) * 3 : (19 - n);
}