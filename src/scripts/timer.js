const startTime = new Date();
let timerId;

export default function displayTimer() {
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    if (window.location.hash === '#timer') {
        startTimer();
        const timer = document.querySelector('#time');
        timer.textContent = `${hours}:${minutes}:${seconds}`;
    }
    if (window.location.hash !== '#timer' && timerId !== 0) {
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
