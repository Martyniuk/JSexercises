/* Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. */

function sort(a, b, c) {
    let args = [].slice.call(arguments);
   // console.log(args);
    return args.sort((a, b) => b - a); 
}

console.log(sort(0, -1, 4));
