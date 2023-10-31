import React from 'react';
import HomeIcon from "../icons/HomeIcon";
import {Link, NavLink} from "react-router-dom";
import './sideBarStyles.css'
import ToursIcon from "../icons/ToursIcon";
import AboutProject from "../aboutProject";
import LocationPage from "../../pages/LocationPage/LocationPage";
import LocationsIcon from "../icons/LocationsIcon";
const SideBar = ({children}) => {

    return (
        <div className="component-sidebar">
                <div className={'sidebar'}>
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26" fill="none">
                            <g clipPath="url(#clip0_489_301)">
                                <path d="M16 2.28571C23.5623 2.28571 29.7143 8.43771 29.7143 16C29.7143 17.6057 29.4366 19.1771 28.8971 20.6606L21.2766 9.13143L19.6549 10.9337L16.0469 4.62057L12.3737 10.7429L10.7794 7.97943L3.05029 20.5131C2.54514 19.0731 2.28571 17.552 2.28571 16C2.28571 8.43771 8.43771 2.28571 16 2.28571ZM16 0C7.16343 0 0 7.16343 0 16C0 19.4023 1.06971 22.5497 2.88 25.1429L10.7143 12.44L13.4286 17.1429L13 14.1429L16 9.14286L20.5714 17.1429L20.0754 13.8846L21 12.8571L29.12 25.1429C30.9303 22.5497 32 19.4023 32 16C32 7.16343 24.8366 0 16 0Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_489_301">
                                    <rect width="32" height="25.1429" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <h5>Wanders</h5>
                    </div>
                    <div className="sidebar-menu">
                        <NavLink to={'/'} className={`btn-icons`} activeclassName={'active svg'}><HomeIcon/><h2>Главная</h2></NavLink>
                        <NavLink to={'/tours'} className={`btn-icons`} activeclassName={'active svg'}><ToursIcon/><h2>Туры</h2></NavLink>
                        <NavLink to={'/locations'} className={`btn-icons`} activeclassName={'active svg'}><LocationsIcon/><h2>Локации</h2></NavLink>
                    </div>
                </div>
                <main>{children}</main>
                <AboutProject/>
                <Link className={'author_link'} to={'/'}>Авторам путешествий</Link>
        </div>

    );
};

export default SideBar;