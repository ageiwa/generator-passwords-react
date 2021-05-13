import React from 'react';
import './style.css';

const BtnGenerate = (props) => {
    const lengthPassword = props.lengthPassword;

    const includeUppercase = props.includeUppercase;
    const includeLowercase = props.includeLowercase;
    const includeNumbers = props.includeNumbers;
    const includeSymbols = props.includeSymbols;

    function randomUpperLetter() {
        let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            index = Math.floor(Math.random() * ((upperLetters.length-1) - 0 + 1)) + 0;

        return upperLetters[index];
    }

    function randomLowerLetter() {
        let lowerLetters = 'abcdefghijklmnopqrstuvwxyz',
            index = Math.floor(Math.random() * ((lowerLetters.length-1) - 0 + 1)) + 0;

        return lowerLetters[index];
    }

    function randomNumber() {
        let numbers = '0123456789',
            index = Math.floor(Math.random() * ((numbers.length-1) - 0 + 1)) + 0;    

        return numbers[index];
    }

    function randomSymbols() {
        let symbols = '`~!@"#№$;%^:&?*()_-+={}[]|<>,./',
            index = Math.floor(Math.random() * ((symbols.length-1) - 0 + 1)) + 0;

        return symbols[index];
    }

    function generatePassword() {
        let password = '';

        for (let i = 0; i < lengthPassword; i++) {
            let nextChar = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

            if (includeUppercase && nextChar === 1) {
                password += randomUpperLetter();
            }
            else if (includeLowercase && nextChar === 2) {
                password += randomLowerLetter();
            }
            else if (includeNumbers && nextChar === 3) {
                password += randomNumber();
            }
            else if (includeSymbols && nextChar === 4) {
                password += randomSymbols();
            }
            else i--;
        }

        props.updatePass(password);
    }

    return <button className="btn-generate" onClick={generatePassword}>GENERATE PASSWORD</button>;
}

export default BtnGenerate;