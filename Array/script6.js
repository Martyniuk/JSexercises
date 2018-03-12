// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8.

function evenDivider(number) {
    if (number) {
        const result = number.split('').map((c, i) => {
            if (c % 2 === 0 && n[i+1] % 2 === 0) {
                return c+'-';
            }
        return n[i];
        });
        return result.join('');
    }
    return '';
}