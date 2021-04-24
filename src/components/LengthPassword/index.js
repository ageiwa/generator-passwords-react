import React, { useState } from 'react';
import './style.css';

const LengthPassword = () => {
    const [progressLine, setProgressLine] = useState('linear-gradient(90deg, #47aadd 43%, #fff 43%)');

    function handleInput(e) {
        let inputValue = e.target.value,
            progress = (100 * (inputValue - 4)) / (32 - 4),
            styleLine = 'linear-gradient(90deg, #47aadd ' + progress + '%, #fff ' + progress + '%)';

        setProgressLine(styleLine);
    }

    const styleProgressLine = {
        background: progressLine
    };

    return (
        <div className="length-password-container">
            <p className="value-range">4</p>
            <input 
                onInput={handleInput}
                style={styleProgressLine}
                className="range-password" 
                type="range"
                min="4"
                max="32"
                defaultValue="16"
            ></input>
            <p className="value-range">32</p>
        </div>
    );
}

export default LengthPassword;