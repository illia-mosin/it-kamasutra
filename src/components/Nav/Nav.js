import React from 'react';
import s from './Nav.module.css';
import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/Friends" activeClassName={s.activeLink}>Friends</NavLink>
                </li>
                <li>
                    <NavLink to="/Tests" activeClassName={s.activeLink}>Test</NavLink>
                </li>
                <li>
                    <NavLink to="#" activeClassName={s.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;