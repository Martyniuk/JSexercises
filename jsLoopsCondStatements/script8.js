/*
According to Wikipedia a happy number is defined by the following process : 
"Starting with any positive integer, replace the number by the sum of the squares of its digits,
 and repeat the process until the number equals 1 (where it will stay), or it loops endlessly
  in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, 
  while those that do not end in 1 are unhappy numbers (or sad numbers)". 
Write a JavaScript program to find and print the first 5 happy numbers.

  +n 
  (pow(i, 2) pow(i, 2) pow(i, 2))
*/


/*
function func() {
    let arr = new Array(100),
        tmpArr = []; // array of odd numbers
    for (var i = 1; i <= arr.length; i++) {
        if (i % 2 != 0) {
            tmpArr.push(i);
        }
    }
    let tmp = tmpArr[1];
    for (var i = 1; i < tmpArr.length; i++) {
        console.log(tmp);
        tmpArr.splice(tmpArr[tmp], 1);
        tmp += tmp;
        console.log(tmp);
    }
    console.log(tmpArr);
}
*/
String.prototype.reduce = [].reduce;
Array.prototype.has= function has (n) { return this.indexOf(n) >= 0 };
Array.prototype.times= function (f,i) { for (i= this[0] ; i<=this[1] ; i++) f(i) };

function happy (n) {
  var past= [];
  while (1) {
    if ((n= n.toString().reduce(function(n,v){ return n+v*v },0)) === 1) return 1;
    if (past.has(n)) return 0; else past.push(n);
}}

[1,1000].times(function(n) { happy(n) && console.log(n) });
// func();