let marker;
export default function init() {
    let map = new ymaps.Map('yandexmap', {
        center: [56.73630928543602,37.16224752339015],
        zoom: 16,
    });
    marker = new ymaps.Placemark([56.735205, 37.164777], {
        hintContent: 'Расположение',
        balloonContent: 'Дом'
    });
    map.geoObjects.add(marker);
}
