
class Router {
    constructor(routes) {
        if (!routes) {
            throw new Error('Routes not found');
        }
        this.routes = routes;
        this.rootElem = document.getElementById('content');
        this.init();
    }

    init() {
     const routes = this.routes;
        (function(scope, routes) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, routes);
            });
        })(this, routes);
        this.hasChanged(this, routes); //проверяем текущий маршрут
    }
    hasChanged(scope, routes){
        if (window.location.hash.length > 0) {
            for (let i = 0, length = routes.length; i < length; i++) {
                const route = routes[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (let i = 0, length = routes.length; i < length; i++) {
                const route = routes[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    } // проверяем хэш URL-адреса и сравниваем его со всеми маршрутами, чтобы определить, какой маршрут активен. Если ни один маршрут не соответствует текущему хэшу, то выбираем маршрут по умолчанию.
    goToRoute(htmlName) {
        (function(scope) { 
            let url = 'pages/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            }; //вставляем содержимое MLHttpRequest в корневой элемент страницы.
            if(htmlName === "map.html") setTimeout(() => {ymaps.ready(initMap)}, 300) //инициализация карты
            if(htmlName === "time.html") setTimeout(() => { updateTimer()}, 300) // загрузка таймера
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};