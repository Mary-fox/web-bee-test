// ymaps.ready(initMap);
// Инициализация карты
function initMap() {
    const map = new ymaps.Map("map", {
      center: [56.753429, 37.164175],
      zoom: 15
    }); 
      const marker = new ymaps.Placemark([56.753429, 37.164175], {
        hintContent: "Ваше местоположение",
    });
      
      map.geoObjects.add(marker);

	hideLoader();
}

function hideLoader() {
	document.getElementById("loader").style.display = "none";
}
