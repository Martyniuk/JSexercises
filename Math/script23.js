//Write a JavaScript function to create a UUID identifier.
/*
Note : 
According to Wikipedia - A universally unique identifier (UUID) is an identifier standard used in software construction. 
A UUID is simply a 128-bit value. The meaning of each bit is defined by any of several variants. 
For human-readable display, many systems use a canonical format using hexadecimal text with inserted hyphen characters. 
For example : de305d54-75b4-431b-adb2-eb6b9e546014
*/

function uuidGenerator() {
    let result = '',
        arrayOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < 32; i++) {
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += '-';
        }
        result += arrayOfChars[Math.floor(Math.random() * arrayOfChars.length)];
    }
    return result;
}