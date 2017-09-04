// Write a JavaScript function to convert a number from one base to another.

function convert(value, from, to) {
    let num = parseInt(value, from);
    return num.toString(to);
}