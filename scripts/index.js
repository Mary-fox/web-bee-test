

(function () {
    function init() {
      let router = new Router([
        new Route('/', 'index2.html'),
        new Route('/active', 'index2.html'),
        new Route('/map', 'map.html'),
        new Route('/time', 'time.html')
      ]);
    }
  
    init();
  }());
  