/* Write a JavaScript program to capitalize the first letter of each word of a given string. */
function capitalizeWordInString(str) {
    let tmp = str.split(' '),
        resArr = [];
    tmp.forEach(i => {
        let fChar = i.slice(0, 1).toUpperCase(),
            restOfStr = i.slice(1),
            resultingStr = fChar + restOfStr;
        resArr.push(resultingStr);
    })

    /* for (var i = 0; i < tmp.length; i++) {
        // i == vaseia
        var fChar = tmp[i].slice(0, 1).toUpperCase(),
            restOfStr = tmp[i].slice(1);
        var lol = fChar + restOfStr;
        resArr.push(lol);
    } */
    return resArr.join(' ');
}

console.log(capitalizeWordInString('vaseia hochet candy'));