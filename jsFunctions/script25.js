/* Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. */
/*
 Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
 */

function longestCountry(arrayOfCountries) {
    let arr = arrayOfCountries.map(i => i.length),
        max = Math.max(...arr);
    return arrayOfCountries.reduce((res,i) => {
        if (i.length === max) {
            res = i;
        }
        return res;
    }, '');
}

console.log(longestCountry(["Australia", "Germany", "United States of America"]));