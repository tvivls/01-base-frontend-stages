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
        document.addEventListener('click', event => {
            const { target } = event;
            if (!target.matches('li a')) return;
            event.preventDefault();
            window.history.pushState({}, '', event.target.href);
            this.hasChanged(routes);

        });
        window.addEventListener('popstate', () => this.hasChanged(routes));
        window.addEventListener('pushState', () => {
            window.addEventListener('popstate', () => this.hasChanged(routes));
        });
        this.hasChanged(routes);
    }
    hasChanged(routes){
        const location = window.location.pathname;
        const lastIndex = location.lastIndexOf('/');
        const currPath = `/${location.slice(lastIndex + 1)}`;
        if (!currPath.includes('/index.html')) {
            routes.forEach(route => {
                if(route.isActiveRoute(location)) {
                    this.goToRoute(route.htmlName);
                }
            })
        } else {
            routes.forEach(route => {
                if(route.default) {
                    this.goToRoute(route.htmlName);
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
