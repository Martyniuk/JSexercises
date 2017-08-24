/* Write a JavaScript function to  get the number of occurrences of each letter in specified string.  */

function func(str) {
     return str.split('').reduce((obj, i) => {
        if (obj[i]) { 
            obj[i]++;
        } else {
            obj[i] = 1;
        }
        return obj;
    }, {})
}

console.log(func('lololo'));