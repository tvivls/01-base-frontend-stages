const startTime = new Date();
let timerId;

function convertTime(time) {
    return time.toString().padStart(2, '0');
}

export default function displayTimer() {
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = (elapsedTime % 60);

    const path = window.location.pathname;
    const isTimer = path.slice(path.lastIndexOf('/') + 1) === 'timer';
    if (isTimer) {
        startTimer();
        const timer = document.querySelector('#time');
        timer.textContent = `${convertTime(hours)}:${convertTime(minutes)}:${convertTime(seconds)}`;
    }
    if (!isTimer && timerId !== 0) {
        stopTimer();
    }
}
function startTimer() {
    timerId = setInterval(displayTimer, 1000);
}

function stopTimer() {
    clearInterval(timerId);
    timerId = 0;
}
