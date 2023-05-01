import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import back from '../../assets/icon/Back.svg'
import statistics from '../../assets/icon/Statistics.svg'
import invoices from '../../assets/icon/Invoices.svg'
import schedule from '../../assets/icon/Schedule.svg'
import activity from '../../assets/icon/Activity.svg'
import map from '../../assets/icon/Map.svg'
import time from '../../assets/icon/Time.svg'
import notes from '../../assets/icon/Notes.svg'
import friends from '../../assets/icon/Friends.svg'
import photos from '../../assets/icon/Photos.svg'
import settings from '../../assets/icon/Settings.svg'
import arrowDown from '../../assets/icon/Arrow-down.svg'



function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');
  
    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location]);
  return (
    <header className="header">
        <nav className="header__main-navbar bg-white shadow-sm mb-1 navbar navbar-expand-lg navbar-light bg-light pt-3 pb-1  mb-1">
            <div className=" nav__container container-xxl">
                <div className="header__left-block d-flex gap-2 ">
                    <a href="#!"><img src={back} alt="back"/></a>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 ps-0">
                            <li className="breadcrumb-item"><a href="#!" className="text-dark fw-bold">User pages</a></li>
                            <li className="breadcrumb-item active text-secondary" aria-current="page">Profile</li>
                        </ol>
                    </nav>
                </div>
                 <div className="header__right-block d-flex gap-4">
                    <a className="header__item text-center" href="#!">
                        <img src={statistics} alt="Statistics icon"/>
                        <p>Statistics</p>
                    </a>
                    <a className="header__item text-center" href="#!">
                            <img src={invoices} alt="Invoices icon"/>
                            <p>Invoices</p>
                    </a>
                    <a className="header__item text-center" href="#!">
                        <img src={schedule} alt="Shedule icon"/>
                        <p>Shedule</p>
                    </a>
                </div>
            </div>
        </nav>
        <nav className="header__subnavbar navbar  bg-secondary-subtle shadow-sm navbar-expand-lg navbar-light bg-light">
            <div className="container-xxl">
            <button className="navbar-toggler pt-0 pb-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="true">
  <span className="navbar-toggler-icon"></span>
</button>
              <div className="navbar-collapse collapse justify-content-between"  id="navbarNav">
                <ul className="navbar-nav gap-2 bg-secondary-subtle">
                    <li className="nav__item d-flex ">
                        <Link className={`d-flex align-items-center  py-2 ps-3 pe-2 gap-2 ${activeLink === '/' ? 'nav__item_active' : ''}`} to="/">
                            <img src={activity} alt="Activity icon"/>
                            <p className="mb-0">Activity</p>
                        </Link>
                    </li>
                    <li className="nav__item d-flex align-items-center">
                        <Link className={`d-flex align-items-center  py-2 ps-3 pe-2 gap-2 ${activeLink === '/map' ? 'nav__item_active' : ''}`} to="/map">
                            <img src={map} alt="Map icon"/>
                            <p className="mb-0">Map</p>
                        </Link>
                    </li>
                    <li className="nav__item d-flex align-items-center">
                        <Link className={`d-flex align-items-center  py-2 ps-3 pe-2 gap-2 ${activeLink === '/time' ? 'nav__item_active' : ''}`} to="/time">
                            <img src={time} alt="Time icon"/>
                            <p className="mb-0">Time</p>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav gap-2 bg-secondary-subtle">
                    <li className="nav__item d-flex align-items-center">
                        <a className="d-flex align-items-center py-2 ps-3 pe-2 gap-2" href="#!">
                            <img src={notes} alt="Notes icon"/>
                            <p className="mb-0">Notes</p>
                        </a>
                    </li>
                    <li className="nav__item d-flex align-items-center">
                        <a className="d-flex align-items-center py-2 ps-3 pe-2 gap-2" href="#!">
                            <img src={friends} alt="Friends icon"/>
                            <p className="mb-0">Friends</p>
                        </a>
                    </li>
                    <li className="nav__item d-flex align-items-center">
                        <a className="d-flex align-items-center py-2 ps-3 pe-2 gap-2" href="#!">
                            <img src={photos} alt="Photos icon"/>
                            <p className="mb-0">Photos</p>
                        </a>
                    </li>
                    <li className="nav__item d-flex align-items-center nav__item_settings">
                        <a className="d-flex align-items-center py-2 ps-3 pe-2 gap-2" href="#!">
                            <img src={settings} alt="Settings icon"/>
                        </a>
                    </li>
                    <li className="nav__item d-flex align-items-center nav__burger_close">
                        <a className="d-flex align-items-center py-2 ps-3 pe-2 gap-2" href="#!">
                            <img src={arrowDown} alt="Arrow icon"/>
                        </a>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
  )
}

export default Header;
