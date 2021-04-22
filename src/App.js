import React from 'react';
import './style.css';
import TitleApp from './components/TitleApp/index';
import Password from './components/Password/index';

const App = () => {
    return (
        <div className="app">
            <TitleApp />
            <div className="wrapper">
                <Password />
            </div>
        </div>
    );
}

export default App;