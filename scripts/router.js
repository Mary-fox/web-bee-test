class Router {
    constructor(routes) {
        if (!routes) {
            throw new Error('Routes not found');
        }
        this.routes = routes;
        this.rootElem = document.getElementById('content');
        if (!this.rootElem) {
            throw new Error('Root element not found');
        }
        this.init();
    }

    init() {
        document.addEventListener('click', event => {
            event.preventDefault();
            const { target } = event;
            if (!target.matches('li a')) return;
            window.history.pushState({}, '', target.href);
            this.hasChanged();
        });
        window.addEventListener('popstate', () => this.hasChanged());
        window.addEventListener('pushState', () => {
            window.addEventListener('popstate', () => this.hasChanged());
        });
        this.hasChanged();
    }

    hasChanged() {
        const location = window.location.pathname;
        const route = this.routes.find(route => location.endsWith(route.name) || route.default);
        if (route && route.isActiveRoute(location)) {
            this.goToRoute(route.htmlName);
        } else {
            console.log(`No active route found for path: ${location}`);
        }
    }

    goToRoute(htmlName) {
        const url = 'pages/' + htmlName;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('The response was not "ok"');
            })
            .then(data => {
                if (!this.rootElem) {
                    console.error('Root element not found');
                    return;
                }
                this.rootElem.innerHTML = data;
                if (url.endsWith('/map.html') && typeof initMap === 'function') {
                    ymaps.ready(initMap);
                }
                if (url.endsWith('/time.html') && typeof updateTimer === 'function') {
                    updateTimer();
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
};
// class Router {
//     constructor(routes) {
//         if (!routes) {
//             throw new Error('Routes not found');
//         }
//         this.routes = routes;
//         this.rootElem = document.getElementById('content');
//         this.init();
//     }

//     init() {
//         const routes = this.routes;
//            (function(scope, routes) { 
//                window.addEventListener('hashchange', function (e) {
//                    scope.hasChanged(scope, routes);
//                });
//            })(this, routes);
//            this.hasChanged(this, routes); //проверяем текущий маршрут
//        }
//     // hasChanged(scope, routes) {
//     //     const pathname = window.location.pathname;
//     //     if (pathname.length > 0) {
//     //       for (let i = 0, length = routes.length; i < length; i++) {
//     //         const route = routes[i];
//     //         if(route.isActiveRoute(pathname)) {
//     //           scope.goToRoute(route.htmlName);
//     //         }
//     //       }
//     //     } else {
//     //       for (let i = 0, length = routes.length; i < length; i++) {
//     //         const route = routes[i];
//     //         if(route.default) {
//     //           scope.goToRoute(route.htmlName);
//     //         }
//     //       }
//     //     }
//     //   } // проверяем путь URL-адреса и сравниваем его со всеми маршрутами, чтобы определить, какой маршрут активен. Если ни один маршрут не соответствует текущему пути, то выбираем маршрут по умолчанию.
//     hasChanged() {
//         const route = this.routes.find(route => window.location.pathname.startsWith(route.name));
        
//         if (!route) {
//           throw new Error('Route not found');
//         }
      
//         if (this.currentRoute && this.currentRoute.name === route.name) {
//           return false;
//         }
      
//         this.currentRoute = route;
//         return true;
//       }
// goToRoute(htmlName) {
//     (function(scope) { 
//       let url = 'pages' + htmlName,
//           xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//           scope.rootElem.innerHTML = this.responseText;
//         }
//       }; //вставляем содержимое MLHttpRequest в корневой элемент страницы.
//       if(htmlName === "map.html") setTimeout(() => {ymaps.ready(initMap)}, 300) //инициализация карты
//       if(htmlName === "time.html") setTimeout(() => { updateTimer()}, 300) // загрузка таймера
//       xhttp.open('GET', url, true);
//       xhttp.send();
//     })(this);
//   }
// };
