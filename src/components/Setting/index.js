import React from 'react';
import './style.css';

const Setting = (props) => {

    function onSwitch(e) {
        let btnSwitch = undefined,
            switchSlider = undefined;

        if (e.target.classList.contains('setting-subtitle')) btnSwitch = e.target.nextElementSibling;
        else if (e.target.classList.contains('btn-switch')) btnSwitch = e.target;
        else if (e.target.classList.contains('switch-slider')) btnSwitch = e.target.parentElement;

        switchSlider = btnSwitch.firstElementChild;

        if (!btnSwitch.classList.contains('btn-switch-on')) {
            btnSwitch.classList.add('btn-switch-on');
            switchSlider.classList.add('switch-slider-on');
        }
        else {
            btnSwitch.classList.remove('btn-switch-on');
            switchSlider.classList.remove('switch-slider-on');
        }
    }

    return (
        <div className="setting-container">
            <p className="setting-subtitle" onClick={onSwitch}>{props.subtitle}</p>
            <div className="btn-switch" onClick={onSwitch}>
                <div className="switch-slider"></div>
            </div>
        </div>
    );
}

export default Setting;