var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 15);// year, month( 0 - january, 11 - december), date, hr, minutes, seconds.
var myFutureDate = new Date(2545, 0, 31);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1994, 2, 17, 11, 15,25);  
var birthday2 = new Date(1994, 2, 17, 11, 15,25);  
//get the month of the date (0-11)
console.log(birthday.getMonth());

//get the full year(yyyy)
console.log(birthday.getFullYear());

//get the date of the month(1-31)
console.log(birthday.getDate());

//get the day of the wwek(0-6 0: sunday , 6: saturday)
console.log(birthday.getDay());

//get the hour of the date (0-23)
console.log(birthday.getHours());

//get the number of millionseconds since 1st Jan 1970
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()) {
    console.log("birthday are equal");
} else {
    console.log("brithday are not equal");
}
// they are two separate objects so result is " not equp " 
/*
if(birthday.getTime() == birthday2.getTime()) {
    console.log("birthday are equal");
} else {
    console.log("brithday are not equal");
}
for this, it compares the milllion seconds since 1970 Jan 1st that's why it's equal.
*/
