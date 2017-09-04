//Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

function func() {
    let str = '';
    for (var i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`FizzBuzz --> ${i} ` + '\t');
        } else if (i % 3 == 0) {
            console.log(`Fizz --> ${i}  \t`);
        } else if (i % 5 == 0) {
            console.log(`Buzz --> ${i}  \t`);
        } else {
            console.log(`${i}`);
        }
    }
    return this;
}

console.log(func());

