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
    const lastIndex = location.lastIndexOf('/')
    const currentPath = `/${location.slice(lastIndex + 1)}`;
    return currentPath === this.name;
}
}