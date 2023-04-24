class Route {
    constructor(name, htmlName, defaultRoute) {
        try {
            if (!name || !htmlName) {
                throw new Error('Name and htmlName params are mandatories');
            }
            this.name = name;
            this.htmlName = htmlName;
            this.default = defaultRoute;
        } catch (e) {
            console.error(e);
        }
    }

    isActiveRoute(location) {
        const lastIndex = location.lastIndexOf('/')
        const currentPath = `/${location.slice(lastIndex + 1)}`
        if (currentPath === '/index.html') return this.default;
        return currentPath === this.name;
    }
}

export default Route;