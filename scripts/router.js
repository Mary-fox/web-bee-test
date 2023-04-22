
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
        this.hasChanged(this, routes);
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
            for (let i = 0, length = r.length; i < length; i++) {
                const route = routes[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    }
    goToRoute(htmlName) {
        (function(scope) { 
            let url = '/pages/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
         

            if(htmlName === "map.html") setTimeout(() => {ymaps.ready(initMap)}, 100)
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};