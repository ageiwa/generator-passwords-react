import React from 'react';
import './style.css';

const Setting = (props) => {
    let btnClName = 'btn-switch',
        switchClName = 'switch-slider';

    if (props.set === true) {
        btnClName = 'btn-switch btn-switch-on';
        switchClName = 'switch-slider switch-slider-on';
    }
    if (props.set === true && props.activeSet === 1) {
        btnClName = 'btn-switch btn-switch-on btn-switch-block';
        switchClName = 'switch-slider switch-slider-on switch-slider-block';
    }

    function onSwitch(e) {
        if (props.set === true && props.activeSet === 1) return false;

        let btnSwitch = undefined;

        if (e.target.classList.contains('setting-subtitle')) btnSwitch = e.target.nextElementSibling;
        else if (e.target.classList.contains('btn-switch')) btnSwitch = e.target;
        else if (e.target.classList.contains('switch-slider')) btnSwitch = e.target.parentElement;

        if (!btnSwitch.classList.contains('btn-switch-on')) props.updateSetting(true);
        else props.updateSetting(false);
    }

    return (
        <div className="setting-container">
            <p className="setting-subtitle" onClick={onSwitch}>{props.subtitle}</p>
            <div className={btnClName} onClick={onSwitch}>
                <div className={switchClName}></div>
            </div>
        </div>
    );
}

export default Setting;