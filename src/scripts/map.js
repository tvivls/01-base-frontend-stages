function initMap() {
    const map = new ymaps.Map('yandexmap', {
        center: [56.73630928543602,37.16224752339015],
        zoom: 16,
    });
    const marker = new ymaps.Placemark([56.735205, 37.164777], {
        hintContent: 'Расположение',
        balloonContent: 'Дом'
    });
    map.geoObjects.add(marker);
}
export default function displayMap() {
    ymaps.ready(initMap);
    const mapDiv = document.getElementById('yandexmap');
    const preloader = document.getElementById('preloader');
    preloader.classList.add('visually-hidden');
    mapDiv.style.display = 'block';
}