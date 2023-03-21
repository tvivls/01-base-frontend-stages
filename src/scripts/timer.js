let startTime = null;
let currentTime = null;
let elapsedTime = 0;

function updateTimer() {
    currentTime = new Date();
    elapsedTime = Math.floor((currentTime - startTime) / 1000);
    let hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    let seconds = (elapsedTime % 60).toString().padStart(2, '0');
    localStorage.setItem('timer', `${hours}:${minutes}:${seconds}`);

    setTimeout(updateTimer, 1000);
}

window.addEventListener('load', function() {
    startTime = new Date();
    setInterval(updateTimer, 1000);
});
