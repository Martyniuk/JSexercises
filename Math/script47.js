//Write a JavaScript function to calculate the extended Euclid Algorithm or extended GCD

function euclidAlg (a, b) {
    let max = 0;
    let min = 0;
    let reminder = 0;
    if (isNumber(a) && isNumber(b)) {
        if (a > b) {
            max = a;
            min = b;
        } else if (b > a) {
            max = b;
            min = a;
        } else {
            return a % b === 0 ? a : 'lol';
        }
    }
    if (isNumber(a) && isNumber(b)) {
        while (reminder !== 0) {
            max = min;
            min = reminder;
            reminder = max % min;
        }
    }
    return max % min;
}

// function gcd(a, b) {
//     return b ? gcd(b, a % b) : a;
// }

function isNumber (a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
}
