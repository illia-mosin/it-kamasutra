import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
    <nav className={s.nav}>
        <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">messages</a></li>
            <li><a href="#">friends</a></li>
            <li><a href="#">test</a></li>
            <li><a href="#">settings</a></li>
        </ul>
    </nav>
    );
}
export default Nav;