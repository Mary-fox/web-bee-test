class Route {
    constructor(name, htmlName, defaultRoute) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    } catch (e) {
        console.error(e);
    } //маршрут, который содержит имя маршрута, имя HTML-файла и флаг
}


    isActiveRoute(location) {
        return location.endsWith(this.name);
    }
}