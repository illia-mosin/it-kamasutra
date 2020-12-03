import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Tests from "./components/Tests/Tests";

import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <section className="app-wrapper-content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/tests" component={Tests}/>
                    <Route path="/friends" component={Friends}/>
                </section>

            </div>
        </BrowserRouter>
    );
}


export default App;
