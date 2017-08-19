/* Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. */



function checkJun() {
    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            console.log(`The First Jun was Sunday in ${year}`);
        }
    }

}


checkJun();