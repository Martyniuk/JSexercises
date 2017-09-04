/* Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. */
function largest(a, b, c, d, e) {
    let args = [].slice.call(arguments);
    return args.reduce((curr, i) => { return Math.max(curr, i) });
}

console.log(largest(-5, -2, -6, 0, -1));