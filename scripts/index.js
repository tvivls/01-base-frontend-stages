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

window.onload = function () {
    const loader = document.querySelector('#preloader');
    loader.classList.add('visually-hidden');
    // loader.style.display = "none";
    const yaMap = document.querySelector('#yandexmap');
    yaMap.style.display = 'block';
    ymaps.ready(yandexMap);
};
