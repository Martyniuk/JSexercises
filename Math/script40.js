//Write a JavaScript function to create random background color. 

function bgGenerator () {
    const hashTag = String.fromCodePoint(35);
    const variety = `0123456789abcdef`;
    let result = hashTag;

    for (let i = 0; i <= 5; i++) {
        let a = Math.floor(Math.random() * variety.length);
        result += variety[a];
    }

    return result;
}
