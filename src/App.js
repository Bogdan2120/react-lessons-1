import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.stateApp.navbarPage}/>
            <div className='app-wrapper_content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs state={props.stateApp.dialogsPage}
                             dispatch={props.dispatch}/>}
                />
                <Route path='/profile' render={() =>
                    <Profile state={props.stateApp.profilePage}
                             dispatch={props.dispatch}/>}
                />
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
