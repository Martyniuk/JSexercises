//Write a JavaScript function to print an integer with commas as thousands separators.

/* Test Data :
console.log(thousands_separators(1000)); 
"1,000"
console.log(thousands_separators(10000.23)); 
"10,000.23"
console.log(thousands_separators(100000));
"100,000"
 */

 function thousands_separators (number) {
     if (number < 1000) {
         return number;
     } else {
         return number.toLocaleString('en');
     }
 }

 /* 
 Geek colution:

    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
 
 */