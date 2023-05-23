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
      
        // Обработка события beforeunload
        window.addEventListener('beforeunload', event => {
          // Получаем текущий URL
          const currentUrl = window.location.pathname;
          const activeRoute = routes.find(route => route.isActiveRoute(currentUrl));
          // Проверяем, нужно ли загрузить соответствующий HTML-файл для активного маршрута
          if (activeRoute) {
            event.preventDefault();
            this.goToRoute(activeRoute.htmlName);
          } else {
            // Перенаправляем пользователя на стартовую страницу
            window.location.replace('/');
          }
        });
      
        this.hasChanged(routes);
      }
      hasChanged(routes) {
        const location = window.location.pathname;
        const route = routes.find(route => location.endsWith(route.name) || route.default);
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
                this.rootElem.innerHTML = data;
                if (url.endsWith('/map.html')) {
                    ymaps.ready(initMap)
                }
                if (url.endsWith('/time.html')) {
                    updateTimer()
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
};

