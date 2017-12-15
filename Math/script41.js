//Write a JavaScript function to count the digits of an integer.

function digitCounter (number) {
    return String(number).split('').reduce((counter, i) => {
        if (i.codePointAt() === 46) {
            console.log('dot detected');
            return counter = counter + 0;
        } 
        return counter = counter + 1;
    }, 0);
}