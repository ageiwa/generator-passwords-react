import React from 'react';
import './style.css';
import Header from './components/Header/index';
import Password from './components/Password/index';
import Title from './components/Title/index';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="wrapper">
                <Password />
            </div>
            <Title text="LENGTH:" />
        </div>
    );
}

export default App;