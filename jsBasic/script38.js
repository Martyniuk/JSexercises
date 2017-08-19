/* Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.  */

function examCheck(totmarks, is_exam) {
    if (is_exam) return totmarks >= 90;
    return (totmarks >= 89 && totmarks <= 100);
}

console.log(examCheck("78", " "));
console.log(examCheck("89", "true "));
console.log(examCheck("99", "true "));