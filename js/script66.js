/* Write a JavaScript program to display the city name if the string begins with
 "Los" or "New" otherwise return blank.  */
function cityDisplay(str) {
    if (str.slice(0, 3) === 'Los' || str.slice(0, 3) === 'New') {
        return str;
    } else {
        return `${str} is not a city on our opinion`
    }
}

console.log(cityDisplay("New York"));
console.log(cityDisplay("Los Angeles"));
console.log(cityDisplay("London"));