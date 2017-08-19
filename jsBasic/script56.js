/* Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas. */

/* function strangeTask(a, b) {
    if (a <= 0 || b <= b) {
        return false;
    }
    let res = Math.round(a / b).toString(),
        resArr = res.split('');
    if (res >= 1000) {
        for (let i = resArr.length - 3; i > 0; i -= 3) {
            resArr.splice(i, 0, ",");
        }
    }
    return resArr.join('');
} */

function strangeTask(n1, n2) {
    if (n1 <= 0 || n2 <= 0)
        return false;
    var div = Math.round(n1 / n2).toString(),
        result_array = div.split("");
    if (div >= 1000) {
        for (var i = div.length - 3; i > 0; i -= 3) {
            result_array.splice(i, 0, ",");
        }
    }
    return result_array.join('');
}

console.log(strangeTask(1300, 0));
console.log(strangeTask(0, 2));
console.log(strangeTask(0, 0));
console.log(strangeTask(1300, 2));
console.log(strangeTask(130000, 2));
console.log(strangeTask(1300000, 2));
console.log(strangeTask(13000000, 2));

// fail
