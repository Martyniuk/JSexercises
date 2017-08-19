/* Write a JavaScript program to count the number of vowels in a given string. */

function vowelCounter(str) {
    let tmp = str.toLowerCase().split('');
    // --->> best way, have to learn --> learn str.replace(/[^aeioyu]/g, "").length; 
    return tmp.reduce((counter, i) => {
        if (i.charCodeAt() === 97 || 
            i.charCodeAt() === 101 ||
            i.charCodeAt() === 121 ||
            i.charCodeAt() === 117 ||
            i.charCodeAt() === 105 ||
            i.charCodeAt() === 111 ) {
                counter++;
            }
        return counter;
    }, 0);
}

console.log(vowelCounter('JavaScript')); //3
console.log(vowelCounter('number')); // 2
console.log(vowelCounter('sovsemlolka')); // 4