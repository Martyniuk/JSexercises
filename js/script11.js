function toF(celcius) {
    let result = celcius * 1.8 + 32;

    return `${celcius}°C is ${result}°F `;
}

function toC(far) {
    let result = 5 * (far - 32) / 9;
    return `${far}°F is ${result}°C `;
}


console.log(toF(60));
console.log(toC(45));