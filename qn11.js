const today = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = weekdays[today.getDay()];
var month = months[today.getMonth()];
var year = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
if (hours < 10) {
    hours = "0" + hours;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}
console.log("Today is " + day + ", " + month + " " + today.getDate() + ", " + year + ".");
console.log("The current time is " + hours + ":" + minutes + ":" + seconds + ".");
