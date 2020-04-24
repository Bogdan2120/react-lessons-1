import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


let posts =[
    {
        id: 1,
        message: 'Hi!',
        like: 25
    },
    {
        id: 2,
        message: 'How do you do?',
        like: 12
    }
];

let dialogs = [
    {
        id: 1,
        name: 'Sasha'
    },
    {
        id: 2,
        name: 'Masha'
    },
    {
        id: 3,
        name: 'Vitya'
    },
    {
        id: 4,
        name: 'Katya'
    }
];

let messages = [
    {
        id: 1,
        message: 'Hi!'
    },
    {
        id: 1,
        message: 'How do you do?'
    },
    {
        id: 1,
        message: 'Yo'
    }
];

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={posts} dialogs={dialogs} messages={messages}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
