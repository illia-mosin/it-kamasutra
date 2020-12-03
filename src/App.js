import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <section className="app-wrapper-content">
                <Profile/>
                <Dialogs/>
            </section>

        </div>
    );
}


export default App;
