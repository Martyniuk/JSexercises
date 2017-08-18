/* Write a JavaScript program to concatenate two strings except their first character.  */

function contcatTwoStringWothoutFirstChar(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}

console.log(contcatTwoStringWothoutFirstChar("PHP","JS"));
console.log(contcatTwoStringWothoutFirstChar("A","B"));
console.log(contcatTwoStringWothoutFirstChar("AA","BB"));