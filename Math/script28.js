// Write a JavaScript function to round up an integer value to the next multiple of 5.

function roundToNextMFive(number) {
    if (typeof number !== 'number') return `${number} is not a number`;
    let tmp = number % 5; //1 
    if (tmp === 2) {
        return number + 3;
    } else if (tmp === 3) {
        return number + 2;
    } else if (tmp === 4) {
        return number + 1;
    } else if (tmp === 1) {
        return number + 4;
    } else {
        return `lol`;
    }
}