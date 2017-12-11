//Write a JavaScript function to limit a value inside a certain range.

function valueLimit (num, from, to) {
    if (num >= from && num <= to) {
        return num;
    } else if (num < from) {
        return from;
    } else {
        return to;
    }
}