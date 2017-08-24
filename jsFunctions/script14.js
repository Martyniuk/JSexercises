/* Write a JavaScript function to convert an amount to coins. */
/* Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1 */

function amountToCoins(n, arr) {
    /* stolen */
    /* if (n == 0) {
        return [];
    } else {
        if (n >= arr[0]) {
            var t = n - arr[0];
            return [arr[0]].concat(toCoins(t, arr));
        } else {
            arr.shift();
            return toCoins(n, arr);
        }
    } */
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));