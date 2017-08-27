/* Write a JavaScript function to find the first not repeated character. */
/* Sample arguments : 'abacddbec' 
Expected output : 'e'  */

function func(str) {
    let strArr = str.split(''),
        counter = 0,
        result = '';
    for (var i = 0; i < strArr.length; i++) {
        counter = 0;
        for (var j = 0; j < strArr.length; j++) {
            if (strArr[i] === strArr[j]) {
                counter++;
            }
        }

        if (counter < 2) {
            result = strArr[i];
            break;
        }
    }   
    return result;
}

console.log(func('abacddbec'));