/* Write a JavaScript function that generates a string id (specified length) of random characters.  */

function idGenerator(length) {
    let result = [],
        sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
    for (var i = 0; i < length; i++) {
        var generatedIndex = Math.floor(Math.random()*sample.length)
        result.push(sample[generatedIndex]);
    }
    return result.join('');
}

console.log(idGenerator(5));
console.log(idGenerator(10));
console.log(idGenerator(4));