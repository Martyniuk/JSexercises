//Write a JavaScript function to check if a number is a whole number or has a decimal place. 

function numberCheck(num) {
    let tmp = parseInt(num);
    let result = num / tmp;
    if (result % 1 !== 0) {
        return `${num} <- has a decimal place`;
    } else {
        return `${num} <- is a whole number`;
    }
}

function alternative(num) {
    let tmp = num - Math.floor(num) === 0;
    if (tmp) {
        return `${num} <- is a whole number`;
    } else {
        return `${num} <- has a decimal place`;
    }
}
