class Route {
    constructor(name, htmlName, defaultRoute) {
        if (!name || !htmlName) {
            throw new Error('Name and URL path are mandatory parameters');
        }
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    }

    isActiveRoute(location) {
        return location.endsWith(this.name);
    }
}