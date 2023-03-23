let startTime;
let currentTime;
let elapsedTime = 0;
let timerId;

export default function displayTimer() {
    currentTime = new Date();
    elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    if (window.location.hash === '#timer') {
        const timer = document.querySelector('#time');
        timer.textContent = `${hours}:${minutes}:${seconds}`;
    }
}
function startTimer() {
    timerId = setInterval(displayTimer, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

window.addEventListener('load', () => {
    startTime = new Date();
    startTimer();
});

window.addEventListener('beforeunload', stopTimer);