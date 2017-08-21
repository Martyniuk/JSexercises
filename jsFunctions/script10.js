/* Write a JavaScript function which returns the n rows by n columns identity matrix. */

function func(n) {
    let res = '';
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= n; j++) {
            if (i == j) {
                res += '1 \n';
            } else {
                res += '0 \n';
            }
        }
        res += '------';
    }
    return res;
}

console.log(func(5));