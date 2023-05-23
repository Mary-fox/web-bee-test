

(function () {
    function init() {
      let router = new Router([
        new Route('/main', 'index.html', true),
        new Route('/map', 'map.html'),
        new Route('/time', 'time.html')
      ]);
    }
  
    init();
  }());
  