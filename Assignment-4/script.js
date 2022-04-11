const st_time = document.querySelector('.container .time');
const start_btt = document.getElementById("startTimer");
const pause_btt = document.getElementById("pauseTimer");
const reset_btt = document.getElementById("resetTimer");

let secs = 0;
let interval = null;

start_btt.addEventListener('click', start);
pause_btt.addEventListener('click', pause);
reset_btt.addEventListener('click', reset);

function timer() {
    secs ++;
    let hours = Math.floor(secs / 3600);
    let mins = Math.floor((secs - (hours * 3600)) / 60);
    let sec = secs % 60;

    if(sec < 10) sec = '0' + sec;
    if(mins < 10) mins = '0' + mins;
    if(hours < 10) hours = '0' + hours;

    st_time.innerText = `${hours}:${mins}:${sec}`;
}

function start() {
    if(interval) { 
        return
    }

    interval = setInterval(timer,1000);
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    pause();
    secs = 0;
    st_time.innerText = '00:00:00';
}