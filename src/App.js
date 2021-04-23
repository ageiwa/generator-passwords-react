import React from 'react';
import './style.css';
import Header from './components/Header/index';
import Password from './components/Password/index';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="wrapper">
                <Password />
            </div>
        </div>
    );
}

export default App;