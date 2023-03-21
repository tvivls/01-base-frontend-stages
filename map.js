const yandexMap = () => {
    const map = new ymaps.Map('yandexmap', {
        center: [56.737155, 37.165405],
        zoom: 16,
    });
    const marker = new ymaps.Placemark([56.737155, 37.165405], {
        hintContent: 'Replace',
        balloonContent: 'This is my home',
    });
    map.geoObjects.add(marker);
}

// window.addEventListener('hashchange',
    function myMap () {
    const loader = document.querySelector('#preloader');
    loader.classList.add('visually-hidden');
    const yaMap = document.querySelector('#yandexmap');
    yaMap.style.display = 'block';
    ymaps.ready(yandexMap);
}

// const time = document.querySelector('#time');
// let ms = 0;
// let timer = 0;
// const start = () => {
//     timer = setInterval(() => {
//         ms += 10;
//         let date = new Date(ms);
//         time.innerHTML = ('0' + date.getUTCHours()).slice(-2) + ':' +
//             ('0' + date.getUTCMinutes()).slice(-2) + ':' +
//             ('0' + date.getUTCSeconds()).slice(-2);
//     }, 1000)
// };
// window.onload = start();

