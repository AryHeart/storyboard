let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let splitButton = document.getElementById('split');
let extractButton = document.getElementById('extract');
let timeoutId;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = false;
let count = 0;

startButton.addEventListener('click', function() {
    if (!timer) {
        timer = true;
        stopWatch();
    }
})

stopButton.addEventListener('click', function() {
    timer = false;
    clearTimeout(timeoutId);
})

resetButton.addEventListener('click', function() {
    timer = false;
    clearTimeout(timeoutId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
})

splitButton.addEventListener('click', function() {
    let splitTime = document.getElementById('hr').innerHTML + ":" + document.getElementById('min').innerHTML + ":" + document.getElementById('sec').innerHTML;
    let splitArea = document.getElementById('splitarea');
    splitArea.value += "\n" + splitTime;
})

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            seconds++;
            count = 0;
        }

        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }

    let hoursString = hours;
    let minutesString = minutes;
    let secondsString = seconds;

    if (hours < 10) {
        hoursString = "0" + hoursString;
    }
    if (minutes < 10) {
        minutesString = "0" + minutesString;
    }
    if (seconds < 10) {
        secondsString = "0" + secondsString;
    }

    document.getElementById('hr').innerHTML = hoursString;
    document.getElementById('min').innerHTML = minutesString;
    document.getElementById('sec').innerHTML = secondsString;
    timeoutId = setTimeout(stopWatch, 10);
}