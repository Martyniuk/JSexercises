var a = new Date();
var month = a.getMonth()+1,
    day = a.getDate(),
    year = a.getFullYear();
if (month < 10) month = '0'+ month;
if (day < 10) day = '0'+ day;

console.log(`${month}-${day}-${year}`);