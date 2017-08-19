/* Write a JavaScript program to calculate days left until next Christmas.  */
/* 
1. date of Christmas --> 25.12
2. create var with Cristmas date
3. get date that is now
4. 
*/

function getDaysToChristmas() {
    let now = new Date(),
        ChristmasDay = new Date(now.getFullYear(), 11, 25);
    let calcDiff = ChristmasDay - now;
    return Math.ceil(calcDiff / (1000 * 60 * 60 *24));
}


today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");