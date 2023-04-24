import Router from './router.js';
import Route from './route.js';
function init() {
    const router = new Router([
        new Route('/main', 'main.html', true),
        new Route('/map', 'map.html'),
        new Route('/timer', 'timer.html')
    ]);
};
init();
