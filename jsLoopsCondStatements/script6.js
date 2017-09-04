/* Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade */

function marksToGrade(obj) {

    for (let key in obj) {
        //console.log(obj[key]);
        var grade = determineGrade(obj[key]);
        obj[key] += grade;
    }
    return obj;
}

function determineGrade(mark) {
    switch (true) {
        case (mark < 60):
            return '- F';
            break;
        case (mark >= 60 && mark < 70):
            return '- D';
            break;
        case (mark >= 70 && mark < 80):
            return '- C';
            break;
        case (mark >= 80 && mark < 90):
            return '- B';
            break;
        case (mark >= 90 && mark <= 100):
            return '- A';
            break;
        default:
            return 'ty loh';
    }
}

function countAverage(obj) {
    let leng = Object.values(obj).length,
        sum = Object.values(obj)
                    .map( i => { return i.split('-')[0]})
                    .reduce((sum, i) => { return sum += Number(i) }, 0);
    return (sum / leng).toFixed(1);
}

let students = {
    David: 80,
    Vinoth: 77,
    Divya: 88,
    Ishitha: 95,
    Thomas: 68
};

console.log(countAverage(marksToGrade(students)));
