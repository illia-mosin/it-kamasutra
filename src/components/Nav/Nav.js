import React from 'react';
import s from './Nav.module.css';
import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";

const Nav = () => {
    return (
    <nav className={s.nav}>
        <ul>
            <li><a href="/Profile">Profile</a></li>
            <li><a href="/Dialogs">Messages</a></li>
            <li><a href="/Friends">friends</a></li>
            <li><a href="/Tests">test</a></li>
            <li><a href="#">settings</a></li>
        </ul>
    </nav>
    );
}
export default Nav;