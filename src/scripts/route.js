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

    isActiveRoute(hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}

export default Route;