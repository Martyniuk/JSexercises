//Write a JavaScript function to subtract elements from one another in an array.

function substrEl (arr) {
    if (Object.prototype.toString.call(arr).slice(8,-1) !== 'Array') {
        return false;
    } else {
        let total = typeof arr[0] !== 'undefined' ? arr[0] : 0;
        for (let i = 1; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                total -= arr[i];
            } else {
                console.log(`${arr[i]} has to be a number`);
            }
        }
        return total;
    }
}
