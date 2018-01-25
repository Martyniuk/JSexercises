//Write a JavaScript function to calculate the divisor and modulus of two integers.

function div_mod(a, b) {
    if (isNumber(a) && isNumber(b)) {
        if (b <= 0) {
            throw new Error(`${b} can not be less or equal zero`);
        }
        return [Math.floor(a/b), a % b]
    }
    return 'biba....';
}

function isNumber (a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
}