import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewTexMessage, updateNewTextPost} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App stateApp={state}
                     addPost={addPost}
                     updateNewTextPost={updateNewTextPost}
                     addMessage={addMessage}
                     updateNewTexMessage={updateNewTexMessage}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
