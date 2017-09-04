// Write a JavaScript program to construct the following pattern, using a nested for loop.

function func(n) {
    let result = '';
    for (var i = 0; i < n; i++) {
        for (var k = 0; k < i; k++) {
            result += '*';
        }

        //console.log(result);
        result += '\n';
    }
    return result;
}

console.log(func(7));
/*
console.log('----------------');

var chr = '';
for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        chr = chr + ("*");
    }
    console.log(chr);
    chr = '';
}  
*/