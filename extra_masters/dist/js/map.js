function yMap() {

    var myMap;

    ymaps.ready(function () {
        myMap = new ymaps.Map('map', {
            zoom: 13,
            center: [59.929503, 30.412165],
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap.behaviors.disable('scrollZoom');

        myMap.controls.add("zoomControl", {
            position: {bottom: 70, left: 10}
        });

        var html = '<div class="inner">';
        html += '<div class="inner-image">';
        html += '<img src="/images/logo/rip-logo.png">';
        html += '</div>';
        html += '<div class="inner-text">';
        html += '<div class="inner-address">ул. Маршала Бирюзова,д. 1, завод «Энергоприбор»</div>';
        html += '<div class="inner-phone">+7 (985) 534-43-54</div>';
        html += '</div>';
        html += '</div>';

        var myPlacemark1 = new ymaps.Placemark([59.935396, 30.379854], {
            balloonContent: html
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/images/map/point.png',
            iconImageSize: [49, 54],
            iconImageOffset: [-20, -47],
            balloonPanelMaxMapArea: 0
        });

        myMap.geoObjects.add(myPlacemark1);
    });

}
yMap();