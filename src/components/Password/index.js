import React from 'react';
import './style.css';

const Password = (props) => {
    return (
        <div className="password-container">
            <p className="password">{props.password}</p>
        </div>
    );
}

export default Password;