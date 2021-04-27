import React from 'react';
import './style.css';

const Setting = () => {
    return (
        <div className="setting-container">
            <p className="setting-subtitle">Include Uppercase</p>
            <div className="btn-switch">
                <div className="switch-slider"></div>
            </div>
        </div>
    );
}

export default Setting;