import displayMap from "./map.js";
import displayTimer from "./timer.js";
class Router {
    constructor(routes) {
        if (!routes) {
            throw new Error('Routes param is mandatory');
        }
        this.routes = routes;
        this.rootElem = document.querySelector('main');
        this.init();
    }
    init() {
        const routes = this.routes;
        window.addEventListener('hashchange', e => this.hasChanged(this, routes));
        this.hasChanged(this, routes);
    }
    hasChanged(scope, routes){
        if (window.location.hash.length > 0) {
            routes.forEach(route => {
                if(route.isActiveRoute(window.location.hash.substring(1))) {
                    scope.goToRoute(route.htmlName);
                }
            })
        } else {
            routes.forEach(route => {
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            })
        }
    }
    goToRoute(htmlName) {
        const scope = this;
        const url = 'src/pages/' + htmlName;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                scope.rootElem.innerHTML = this.responseText;
            }
        };

        xhttp.addEventListener('readystatechange', () => {
            if (xhttp.readyState === 4) {
                if (url === 'src/pages/map.html') {
                    displayMap();
                }
                if (url === 'src/pages/timer.html') {
                    displayTimer();
                }
            }
        });

        xhttp.open('GET', url, true);
        xhttp.send();
    }
}

export default Router;
