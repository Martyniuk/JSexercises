/* Write a JavaScript program to convert a given number to hours and minutes. */
function timeConverter(n) {
    let hours = Math.floor(n / 60),
        minutes = n % 60;
    return `${hours} : ${minutes}`;
}

console.log(timeConverter(71));
console.log(timeConverter(450));
console.log(timeConverter(1441));