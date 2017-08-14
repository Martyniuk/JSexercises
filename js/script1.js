var date = new Date();
var day = '',
    hours = new Date().toLocaleDateString('en-US', {hour: 'numeric', hour12: true}).substr(11);
    minutes = new Date().getMinutes(),
    seconds = new Date().getSeconds();
switch (date.getDay()) {
    case 0: 
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2: 
        day = 'Tuesday';
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
        day = 'kakoi ewe den ty wo';
        break;
}

console.log(`Today is: ${day}`);
console.log(`Current time is: ${hours} : ${minutes} : ${seconds}`);