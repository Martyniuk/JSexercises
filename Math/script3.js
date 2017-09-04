//Write a JavaScript function to convert a decimal number to binary,
// hexadecimal or octal number.

function convert(value, to) {
    switch (to) {
        case ('B'):
            var n = parseInt(value, 10);
            return n.toString(2);
            break;
        case ('H'):
            var n = parseInt(value, 10);    
            return n.toString(16);
            break;
        case ('O'):
            var n = parseInt(value, 10);
            return n.toString(8);
            break;
        default:
            console.log('vas\' ne goni');
    }
}

console.log(convert(120,'B')); 
console.log(convert(120,'H')); 
console.log(convert(120,'O'));