/* Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". */

function func() {
    let random = Math.floor((Math.random() * 10) + 1);
    let indicator = false;
    while (!indicator) {
        let guess = +prompt('Try to Gues number:', '');
        if (guess === random) {
            alert('Well Done!');
            indicator = !indicator;
        } else {
            alert('Try again!');
        }
    }
}

func();