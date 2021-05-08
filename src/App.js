import React, { useState } from 'react';
import './style.css';
import Header from './components/Header/index';
import Password from './components/Password/index';
import Title from './components/Title/index';
import LengthPassword from './components/LengthPassword/index';
import Setting from './components/Setting/index';
import BtnGenerate from './components/BtnGenerate/index';

const App = () => {
    const [lengthPass, setLengthPass] = useState(16);

    const updateLengthPass = (length) => setLengthPass(length);

    return (
        <div className="app">
            <Header />
            <div className="wrapper">
                <Password />
            </div>
            <Title text={"LENGTH: " + lengthPass} />
            <div className="wrapper">
                <LengthPassword updateLength={updateLengthPass} />
            </div>
            <Title text="SETTINGS:" />
            <div className="wrapper">
                <Setting subtitle="Include Uppercase" />
                <Setting subtitle="Include Lowercase" />
                <Setting subtitle="Include Numbers" />
                <Setting subtitle="Include Symbols" />
                <BtnGenerate />
            </div>
        </div>
    );
}

export default App;