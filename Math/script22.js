//Write a JavaScript function that Convert Roman Numeral to Integer

function romanToInteger(romanNumber) {
    let result = 0,
        decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ["M", 'CM', "D", 'CD', "C", 'XC', "L", 'XL', "X", 'IX', "V", 'IV', "I"];
    
    for (let i = 0; i < decimal.length; i++) {
        while (romanNumber.indexOf(roman[i]) >= 0) {
            result += decimal[i];
            romanNumber = romanNumber.replace(roman[i], '');
        }
    }
    return result;
}

//function 