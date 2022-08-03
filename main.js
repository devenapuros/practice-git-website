let clockCounter = 60;
const clock = document.getElementById("clock");

let timer = setInterval(() => {
    clockCounter--;
    clock.innerHTML = clockCounter;
    if (clockCounter === 0) clearInterval(timer);
}, 1000);
