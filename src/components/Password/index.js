import React, { useRef, useState } from 'react';
import './style.css';

const Password = (props) => {
    const [password, setPassword] = useState('CLICK GENERATE');

    const refCopied = useRef(null);
    const refClickToCopy = useRef(null);

    if (props.newPassword !== password) {
        setPassword(props.newPassword);

        refCopied.current.classList.remove('info-copied-on');
        refClickToCopy.current.classList.add('info-click-to-copy-on');
    }

    function copyPassword() {
        if (password !== 'CLICK GENERATE') {
            navigator.clipboard.writeText(password);

            refCopied.current.classList.add('info-copied-on');
            refClickToCopy.current.classList.remove('info-click-to-copy-on');
        }
    }
    
    return (
        <div className="password-container" onClick={copyPassword}>
            <span className="info-copied" ref={refCopied}>copied</span>
            <p className="password">{password}</p>
            <span className="info-click-to-copy" ref={refClickToCopy}>click to copy</span>
        </div>
    );
}

export default Password;