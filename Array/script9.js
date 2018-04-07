// Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const string = 'The Quick Brown Fox';
console.log(string);
caseSwapper = (string) => {
    return string.split('').map(i => {
        if (i === i.toLowerCase()) {
            return i.toUpperCase();
        } else {
            return i.toLowerCase();
        }
    }).join('');
};

console.log(caseSwapper(string));
