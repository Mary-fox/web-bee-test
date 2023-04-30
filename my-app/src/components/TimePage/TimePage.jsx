import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header";
import './TimePage.css'
import down from '../../assets/icon/map-down.svg'
import update from '../../assets/icon/map-update.svg'
import close from '../../assets/icon/map-close.svg'


function TimePage() {
    const [time, setTime] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  
  

  return (<>

   <Header/>
    <section className="time__container container-xxl">
        <div className="time__post bg-white shadow-sm pt-3 ps-4 pb-4 pe-4">
            <div className="time__title-block d-flex justify-content-between pb-3">
                <h1 className="time__title mb-0">Timer</h1>
                <div className="time__icons d-flex gap-4">
                    <img role="button" src={down} alt="btn dowN"/>
                    <img role="button" src={update} alt="btn update"/>
                    <img role="button" src={close} alt="btn close"/>
                </div>
            </div>
            <div>{`${hours}:${minutes}:${seconds}`}</div>
        </div>
    </section>
    </>

  );
}

export default TimePage;