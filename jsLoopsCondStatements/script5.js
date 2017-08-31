/* Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. */

function evenOdd() {
    let arr = new Array(15);
    for (var i = 0; i < arr.length; i++) {
        
        if (i % 2 == 0) {
            console.log(`${i} is even`);
        } else if (i % 2 != 0) {
            console.log(`${i} is odd`);
        } else {
           // console.log('ty loh')
        }
    }
}

evenOdd();