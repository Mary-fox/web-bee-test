import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header";
import './MainPage.css'
import time from '../../assets/icon/Time.svg'
import chevronDown from '../../assets/icon/Chevron-down.svg'
import outlineDown from '../../assets/icon/outline-down.svg'
import personOutline from '../../assets/icon/Person-Outline.svg'
import telegram from '../../assets/icon/telegram.svg'
import hh from '../../assets/icon/hh.svg'
import financeOutline from '../../assets/icon/Finance-Outline.svg'
import schemeOutline from '../../assets/icon/Scheme-Outline.svg'
import peopleOutline from '../../assets/icon/People-Outline.svg'
import settingsOutline from '../../assets/icon/Settings-Outline.svg'
import calendarOutline from '../../assets/icon/Calendar-Outline.svg'


function MainPage() {

  return (<>

   <Header/>
    <main className="content">
        <div className="main__container container-xxl d-flex flex-column-reverse flex-lg-row flex-xl-row gap-4">
            <div className="main__content d-flex flex-column сol-md-9">
                <div className="post post__open bg-white shadow-sm pt-5 ps-4 pb-4 pe-4">
                    <img className="post__image" src={require("../../assets/image/post-image.jpg")} alt='post'/>
                    <div className="post__info d-flex flex-column gap-2">
                        <p className="post__text">
                            Hello! My name is Mary. I'm a humanitarion. I started learning frontend development a year ago.
                            I know a little bit about html and css. Now I'm learning JS and React. I like to solve different problems that lead me to a great result.
                        </p>
                            <div className="skills">
                                <h2 className="skills__title pb-1">Skills</h2>
                                <ul className="skills__list d-flex flex-column">
                                    <li className="skills__item">HTML, CSS, BEM</li>
                                    <li className="skills__item">JavaScript</li>
                                    <li className="skills__item">React</li>
                                    <li className="skills__item">Redax</li>
                                    <li className="skills__item">Figma, Git</li>
                                </ul>
                            </div>
                            <div className="education">
                                <h2 className="education__title pb-1">Education</h2>
                                <ul className="education__list d-flex flex-column">
                                    <li className="education__item">2011-2016 RANEPA. Russian Presidential Academy of National Economy and Public Administration.</li>
                                    <li className="education__item">2022 Innopolis university - Basics of frontend development (HTML, CSS, JS, React, Redux).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="post post__close bg-white shadow-sm pt-2 ps-3 pb-3 pe-4 d-flex justify-content-between align-items-center">
                        <h2 className="post__title mb-0">Sunset Sunset Sunset</h2>
                        <div className="post__time d-flex gap-2">
                            <img src={time} alt="time"/>
                            <p className="mb-0">53 minutes ago</p>
                            <img  className="post__icon" src={chevronDown} alt="btn down"/>
                        </div>
                    </div>
                    <div className="post post__close bg-white shadow-sm pt-2 ps-3 pb-3 pe-4 d-flex justify-content-between align-items-center">
                        <h2 className="post__title mb-0">Morning of Siberia</h2>
                        <div className="post__time d-flex gap-2">
                            <img src={time} alt="time"/>
                            <p className="mb-0">56 minutes ago</p>
                            <img className="post__icon" src={chevronDown} alt="btn down"/>
                        </div>
                    </div>
                </div>
                <div className="sidebar сol-md-5">
                    <div className="sidebar__container d-flex flex-column gap-4">
                        <div className="sidebar__card bg-white shadow-sm d-flex flex-column justify-content-center align-items-center text-center">
                            <img className="sidebar__avatar" src={require("../../assets/image/my-photo.jpg")} alt="me"/>
                            <h1 className="sidebar__title pt-3 pb-2 mb-0">Mary Timashova</h1>
                            <p className="sidebar__subtitle  pb-3 mb-0">Junior frontend developer</p>
                            <div className="sidebar__contacts d-flex gap-2">
                                <a href="https://t.me/MariiaTimashova"><img src={telegram} alt="telegram"/></a>
                                <a href="https://obninsk.hh.ru/resume/9e0f0bb5ff0ae1228f0039ed1f544e33437538"><img src={hh} alt="hh"/></a>
                            </div>
                        </div>
                        <div className="navigation__block d-flex flex-column">
                            <div className="navigation__header d-flex justify-content-between mb-2 position-relative bg-white shadow-sm" role="button">
                                <h3 className="mb-0">Navigation</h3>
                                <img src={outlineDown} alt="outline down"/>
                            </div>
                            <div className="navigation__list">
                                <ul className="navigation__item  d-flex flex-column bg-white shadow-sm">
                                    <li className="d-flex gap-2 position-relative align-items-center" role="button">
                                        <img src={personOutline} alt="Person Outline"/>
                                        <p className="navigation__title mb-0">My profile</p>
                                    </li>
                                    <li className="d-flex gap-2 position-relative align-items-center" role="button">
                                        <img src={financeOutline} alt="Finance Outline"/>
                                        <p className="navigation__title mb-0">Balance</p>
                                        <span className="navigation__balance">$ 1,430</span>
                                    </li>
                                    <li className="d-flex gap-2 position-relative align-items-center" role="button">
                                        <img src={schemeOutline} alt="Scheme Outline"/>
                                        <p className="navigation__title mb-0">Connections</p>
                                        <span className="quantity quantity_red">29</span>
                                    </li>
                                    <li className="d-flex gap-2 position-relative align-items-center" role="button">
                                        <img src={peopleOutline} alt="People Outline"/>
                                        <p className="navigation__title mb-0">Friends</p>
                                    </li>
                                </ul>    
                                <ul className="navigation__item d-flex flex-column bg-white shadow-sm d-flex" role="button">
                                     <li className="d-flex gap-2 position-relative align-items-center" role="button">
                                        <img src={calendarOutline} alt="Calendar Outline"/>
                                        <p className="navigation__title mb-0">Events</p>
                                        <span className="quantity quantity_green">45</span>
                                    </li>
                                    <li className="d-flex gap-2 position-relative align-items-center" role="button">
                                        <img src={settingsOutline} alt="Settings Outline"/>
                                        <p className="navigation__title mb-0">Account settings</p>
                                    </li>
                                </ul>
                             </div>
                        </div>
                        <div className="message__block  d-flex flex-column bg-white shadow-sm">
                            <div className="message__header d-flex justify-content-between mb-2 position-relative bg-white shadow-sm" role="button">
                                <h3 className="mb-0">Share your thoughts</h3>
                                <img src={outlineDown} alt="outline down"/>
                            </div>
                            <div className="message__container d-flex flex-column bg-white shadow-sm">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Enter your message..."></textarea>
                                <button type="button" className="btn btn-primary message__btn">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
    </>

  );
}

export default MainPage;