import displayMap from "./map";
import displayTimer from "./timer";
import activePage from "./activePage";

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
            event.preventDefault();
            const { target } = event;
            if (!target.matches('li a')) return;
            window.history.pushState({}, '', target.href);
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
        routes.forEach(route => {
            if (location.endsWith(route.name)) {
                if (route.isActiveRoute(location)) {
                    this.goToRoute(route.htmlName);
                    activePage(document.querySelector(`#nav-${route.name.slice(1)}`), routes);
                }
            } else if (route.default) {
                this.goToRoute(route.htmlName);
            }
        })
    }
    goToRoute(htmlName) {
        const url = htmlName;
        const location = window.location.pathname;
        this.rootElem.innerHTML = url;
        if (location.endsWith('/map')) {
            displayMap();
        }
        if (location.endsWith('/timer')) {
            displayTimer();
        }
    }
}

export default Router;
