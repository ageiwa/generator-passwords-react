import React from 'react';
import './style.css';
import Header from './components/Header/index';
import Password from './components/Password/index';
import Title from './components/Title/index';
import LengthPassword from './components/LengthPassword/index';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="wrapper">
                <Password />
            </div>
            <Title text="LENGTH:" />
            <div className="wrapper">
                <LengthPassword />
            </div>
            <Title text="SETTINGS:" />
        </div>
    );
}

export default App;