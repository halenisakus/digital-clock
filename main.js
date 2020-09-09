var date = new Date();
var hour, minutes, seconds, milliSeconds;
hour = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
document.getElementsByClassName("date")[0].innerText = date.getDate() + " - " + date.getUTCMonth() + " - " + date.getFullYear();
setInterval(function() {

    // milliSeconds = date.getMilliseconds();
    console.log(hour + "" + minutes + "" + seconds + "" + milliSeconds);
    document.getElementsByClassName("hour")[0].innerText = hour;
    document.getElementsByClassName("minute")[0].innerText = minutes;
    document.getElementsByClassName("second")[0].innerText = seconds++;
    // document.getElementsByClassName("millisecond")[0].innerText = milliSeconds;
    if (parseInt(document.getElementsByClassName("second")[0].innerText) > 59) {
        minutes++;
        seconds = 0;
    }
    if ((document.getElementsByClassName("minute")[0].innerText) > 59) {
        hour++;
        minutes = 0;
    }

    if ((document.getElementsByClassName("hour")[0].innerText) > 23) {
        hour = 0;
        minutes = 0;
    }

}, 1000);