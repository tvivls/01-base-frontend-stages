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
        window.addEventListener('popstate', () => this.hasChanged(this, routes));
        window.addEventListener('pushState', () => {
            window.addEventListener('popstate', () => this.hasChanged(this, routes));
        });
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
        const url = 'src/pages/' + htmlName;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('The response was not "ok"');
            })
            .then(data => {
                this.rootElem.innerHTML = data;
                if (url === 'src/pages/map.html') {
                    displayMap();
                }
                if (url === 'src/pages/timer.html') {
                    displayTimer();
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
}

export default Router;
