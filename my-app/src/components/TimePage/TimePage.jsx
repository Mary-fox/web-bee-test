import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header";
import './TimePage.css'
import down from '../../assets/icon/map-down.svg'
import update from '../../assets/icon/map-update.svg'
import close from '../../assets/icon/map-close.svg'
import { useState, useEffect} from 'react';

function TimePage() {
    const [time, setTime] = useState(0);

    useEffect(() => {
      const startTime = parseInt(localStorage.getItem('startTime')) || Date.now();
  
      const interval = setInterval(() => {
        const now = Date.now();
        const elapsedTime = now - startTime;
        setTime(elapsedTime);
        localStorage.setItem('startTime', startTime);
      }, 100);
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        clearInterval(interval);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
  
    const handleBeforeUnload = () => {
      localStorage.setItem('startTime', Date.now());
    };
  
    const formatTimer = (time) => {
      const seconds = Math.floor(time / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
  
      return `${hours}:${minutes % 60}:${seconds % 60}`;
    };
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
            <div>
            <div>{formatTimer(time)}</div>
    </div>
        </div>
    </section>
    </>

  );
}

export default TimePage;