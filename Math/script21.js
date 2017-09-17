// write a JavaScript function that Convert an integer into a Roman Numeral in javaScript.

function integerConverterToRoman(number) {
    let result = '',
        decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ["M", 'CM', "D", 'CD', "C", 'XC', "L", 'XL', "X", 'IX', "V", 'IV', "I"];

    for (let i = 0; i < decimal.length; i++) {
        // 8 % 1000
        // 8 % 500
        // 8 % 400
        while (number % decimal[i] > number) {
            result += roman[i];
            number -= decimal[i];
        }        
    }
    return result;
}
