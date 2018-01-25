// Write a JavaScript function to show the first twenty Hamming numbers.
// Hamming Numbers are numbers whose only prime factors are 2, 3 and 5.

function humNumbers (n) {
  const res = [];
  let number = 1;
  while (res.length !== n) {
      if (isHammingNumber(number)) {
      res.push(number);
    }
    number++;
  }
  return res;
}

function isHammingNumber(num) {
        while (num % 5 === 0) num /= 5;
        while (num % 3 === 0) num /= 3;
        while (num % 2 === 0) num /= 2;

        return num == 1;
}
