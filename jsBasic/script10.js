/* Write a JavaScript program to calculate multiplication and division of two numbers (input from user). */

let fInput = document.getElementById('fInput'),
    sInput = document.getElementById('sInput'),
    multiply = document.getElementById('multiply'),
    divide = document.getElementById('divide'),
    output = document.getElementsByClassName('output')[0];

let result = 0;

multiply.addEventListener('click', () => {
    result = fInput.value * sInput.value;
    output.textContent = result;
});

divide.addEventListener('click', () => {
   // result = Number(fInput.value) / Number(sInput.value);
    result = fInput.value / sInput.value;
    output.textContent = result;
});

