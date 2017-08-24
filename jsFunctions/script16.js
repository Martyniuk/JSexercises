/* Write a JavaScript function to extract unique characters from a string.  */

function deduplicateStr(str) {
    let strArr = str.split('');
    let filtered = strArr.filter((el, i) => {
        return strArr.indexOf(el) === i;
    }) 
    return filtered.join('');
}

console.log(deduplicateStr("thequickbrownfoxjumpsoverthelazydog"));