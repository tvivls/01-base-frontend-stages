(function () {
    function init() {
        let router = new Router([
            new Route('main', 'main.html', true),
            new Route('map', 'map.html'),
            new Route('timer', 'timer.html')
        ]);
    }
    init();
}());
