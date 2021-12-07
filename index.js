const leapYear = prompt ("Please enter a Year");

if (leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0) {
    console.log (`${leapYear} is a leap year`)
    
} else {
    console. log (`${leapYear} is a not leap year.`)
};