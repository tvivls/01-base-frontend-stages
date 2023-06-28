import Router from "./router";
import Route from "./route";
import main from '../pages/main.html';
import map from '../pages/map.html';
import timer from '../pages/timer.html';

function init() {
    const router = new Router([
        new Route('/main', main, true),
        new Route('/map', map),
        new Route('/timer', timer)
    ]);
};
init();
