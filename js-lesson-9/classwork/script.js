window.addEventListener("DOMContentLoaded", () => { 
    let display = document.querySelector(".stopwatch-display");
    let controls = document.querySelectorAll("button");
    let startBtn = controls[0];
    let stopBtn = controls[1];
    let resetBtn = controls[2];
    let stopwatch = document.querySelector("#stopwatch-display");
    let sec = min = hour = 0;
    let timerEnabled = false;
    let disp = (hour, min, sec) => {
        hour = (hour < 10) ? '0' + hour : hour;
        min = (min < 10) ? '0' + min : min;
        sec = (sec < 10) ? '0' + sec : sec;
        stopwatch.innerHTML = `${hour} : ${min} : ${sec}`;
    }
    disp(hour, min, sec);
    let counter = () => {
        if (sec == 60) {
            sec = 0;
            min++;
        }
        else if (min == 60) {
            min = 0;
            hour++;
        }
        else if (hour == 24) {
            hour = 0;
        }
        disp(hour, min, sec);
        sec++;

    }
    let start = () => { 
        if (!timerEnabled) {
            timer = setInterval(counter, 1000);
            timerEnabled = true;
        }
    }
    let stop = () => {
        clearInterval(timer);
        timerEnabled = false;
    }
    let reset = () => {
        clearInterval(timer);
        sec = 0;
        min = 0;
        hour = 0;
        disp(hour, min, sec);
        timerEnabled = false;
    }
    startBtn.addEventListener("click", () => {                
        stopwatch.style.backgroundColor = "green";
        start();
    })

    stopBtn.addEventListener("click", () => {            
        stopwatch.style.backgroundColor = "red";
        stop();
    })


    resetBtn.addEventListener("click", () => {               
        stopwatch.style.backgroundColor = "grey";
        reset();
    })

});