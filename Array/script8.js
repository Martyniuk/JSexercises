// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const arr =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

freqItem = (array) => {
    let counter = {};
    let result = '';
    let maxValue = '';

    array.forEach((item, index, arr) => {
        const word = arr[index];
        if (counter[word] === undefined) {
            counter[word] = 1;
        } else {
            counter[word]++;
        }
    });
    maxValue = Object.values(counter).reduce((c, n) => Math.max(c, n));
    for (let key in counter) {
        if (counter[key] === maxValue) {
            result = key;
        }
    }
    return `${result} (${maxValue} times)`;
}

console.log(freqItem(arr));
