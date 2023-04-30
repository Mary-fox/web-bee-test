
import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header";
import './MapPage.css'
import down from '../../assets/icon/map-down.svg'
import update from '../../assets/icon/map-update.svg'
import close from '../../assets/icon/map-close.svg'


function MapPage() {
    const [isLoading, setIsLoading] = useState(true);

    const handleMapLoad = () => {
      setIsLoading(false);
    };
  return (<>

   <Header/>
    <main>
    <section className="map__container container-xxl">
        <div className="map__post bg-white shadow-sm pt-3 ps-4 pb-4 pe-4">
            <div className="map__title-block d-flex justify-content-between pb-3">
                <h1 className="map__title mb-0">Basic map</h1>
                <div className="map__icons d-flex gap-4">
                    <img role="button" src={down} alt="btn dowN"/>
                    <img role="button" src={update} alt="btn update"/>
                    <img role="button" src={close} alt="btn close"/>
                </div>
            </div>
            {isLoading && <div className="loader" id="loader">
                            <div className="spinner"></div>
                          </div> }
                <YMaps>
                    <Map
                    onLoad={handleMapLoad}
                    defaultState={{ center: [56.753429, 37.164175], zoom: 15 }}
                    width="100%"
                    height="400px"
                    >
                    <Placemark
                        geometry={[56.753429, 37.164175]}
                        properties={{ hintContent: "Ваше местоположение" }}
                    />
                    </Map>
                </YMaps>
        </div>
    </section>
    </main>
    </>

  );
}

export default MapPage;