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

    const [includeUp, setIncludeUp] = useState(true);
    const [includeLow, setIncludeLow] = useState(false);
    const [includeNum, setIncludeNum] = useState(false);
    const [includeSym, setIncludeSym] = useState(false);

    const updateLengthPass = (length) => setLengthPass(length);

    const updateIncludeUp = (set) => setIncludeUp(set);
    const updateIncludeLow = (set) => setIncludeLow(set);
    const updateIncludeNum = (set) => setIncludeNum(set);
    const updateIncludeSym = (set) => setIncludeSym(set);

    let countSets = includeUp + includeLow + includeNum + includeSym;

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
                <Setting subtitle="Include Uppercase" updateSetting={updateIncludeUp} set={includeUp} activeSet={countSets} />
                <Setting subtitle="Include Lowercase" updateSetting={updateIncludeLow} set={includeLow} activeSet={countSets} />
                <Setting subtitle="Include Numbers" updateSetting={updateIncludeNum} set={includeNum} activeSet={countSets} />
                <Setting subtitle="Include Symbols" updateSetting={updateIncludeSym} set={includeSym} activeSet={countSets} />
                <BtnGenerate />
            </div>
        </div>
    );
}

export default App;