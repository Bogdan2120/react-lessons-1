import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png'/>
        </header>
        <nav className='nav'>
            <div>
               <a href='#'>Profile</a>
            </div>
            <div>
                <a href='#'>Massages</a>
            </div>
            <div>
                <a href='#'>News</a>
            </div>
            <div>
                <a href='#'>Music</a>
            </div>
            <div>
                <a href='#'>Settings</a>
            </div>
        </nav>
        <div className='content'>
            <div>
                <img src='https://base.imgix.net/files/base/ebm/machinedesign/image/2019/04/machinedesign_16188_promo_eclipse.png?auto=format&fit=crop&h=432&w=768'/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                post
                <div>
                    new post
                </div>
            </div>
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;
