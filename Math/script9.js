//Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.

function GCD(arr) {
    if (toString().call(arr) !== "[object Array]") {
        return false;
    }
    var res = 0;
    arr.reduce((c, i) => {       
        while(c !== i) {
            c > i ? c = c - i : i = i - c;
        }
       return res = c;
    }, arr[0]);
    return res;
}

console.log(GCD([3, 15, 27]));