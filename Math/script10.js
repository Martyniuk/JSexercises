//Write a JavaScript function to get the least common multiple (LCM) of two numbers.

function lcm(a, b) {
   
}



/* function lcm(a, b) {
    let firstArr = [],
        secondArr = [];
    for (var i = 1; i <= 10; i++) {
        firstArr.push(a * i);
    }
    for (var i = 1; i <= 10; i++) {
        secondArr.push(b * i);
    }
    let common = firstArr.concat(secondArr).sort((a, b) => a > b ? 1 : -1);
    console.log(common);

    return common.reduceRight((reslt, i) => {
        if (i % a == 0 && i % b == 0) {
            return i;
        }
    }, common[0]);
} */

console.log(lcm(10, 15));