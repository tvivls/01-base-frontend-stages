import displayMap from "./map.js";
import displayTimer from "./timer.js";
import activePage from "./activePage.js";
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
            activePage(target.parentNode);
            this.hasChanged(routes);
        });
        localStorage.setItem('mainPage', window.location.href);
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
                    localStorage.setItem('currentPage', window.location.href);
                }
            } else if (route.default) {
                this.goToRoute(route.htmlName);
            }
        })
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
                if (url.endsWith('/map.html')) {
                    displayMap();
                }
                if (url.endsWith('/timer.html')) {
                    displayTimer();
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
}

export default Router;
