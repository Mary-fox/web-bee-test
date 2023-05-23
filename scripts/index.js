

(function () {
    function init() {
      let router = new Router([
        new Route('/', 'index.html'),
        new Route('/map', 'map.html'),
        new Route('/time', 'time.html')
      ]);
    }
  
    init();
  }());
  