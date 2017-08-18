/* Write a JavaScript program to concatenate two strings and return the result.
 If the length of the strings are not same then remove the characters from the longer string.  */


function func(str1, str2) {
    if (str1.length !== str2.length) {
        if (str1.length > str2.length) {
            return str1;
        } else {
            return str2;
        }
    }
    return str1 + str2;
}

console.log(func("Python", "JS"));
console.log(func("ab", "cdef"));


// lol, read below what author ment by this description =)))
/*
 function str_con_cat(str1, str2) {
  const m = Math.min(str1.length, str2.length);

  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

*/