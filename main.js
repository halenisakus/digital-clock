var date = new Date();
var hours, minutes, seconds, milliSeconds;
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
document.getElementsByClassName("date")[0].innerText = date.getDate() + " - " + date.getUTCMonth() + " - " + date.getFullYear();
setInterval(function() {

    // milliSeconds = date.getMilliseconds();
    console.log(hours + "" + minutes + "" + seconds + "" + milliSeconds);
    document.getElementsByClassName("hour")[0].innerText = hours;
    document.getElementsByClassName("minute")[0].innerText = minutes;
    document.getElementsByClassName("second")[0].innerText = seconds++;
    // document.getElementsByClassName("millisecond")[0].innerText = milliSeconds;
    if (parseInt(document.getElementsByClassName("second")[0].innerText) > 59) {
        minutes++;
        seconds = 0;
    }
    if ((document.getElementsByClassName("minute")[0].innerText) > 59) {
        hours++;
        minutes = 0;
    }

    if ((document.getElementsByClassName("hour")[0].innerText) > 23) {
        hours = 0;
        minutes = 0;
    }

}, 1000);