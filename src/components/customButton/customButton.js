import React from 'react';
import btnCustom from './btnCustom.module.css'

const CustomButton = ({title, type, onClick}) => {
    return (
        <button
            className={btnCustom.custom_btn}
            type={type}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M0 5.99967C0 5.63148 0.298477 5.33301 0.666667 5.33301H11.3333C11.7015 5.33301 12 5.63148 12 5.99967C12 6.36786 11.7015 6.66634 11.3333 6.66634H0.666667C0.298477 6.66634 0 6.36786 0 5.99967Z"
                      fill="#0FA958"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M5.99935 -2.91409e-08C6.36754 -1.30468e-08 6.66602 0.298477 6.66602 0.666667L6.66602 11.3333C6.66602 11.7015 6.36754 12 5.99935 12C5.63116 12 5.33268 11.7015 5.33268 11.3333L5.33268 0.666667C5.33268 0.298477 5.63116 -4.5235e-08 5.99935 -2.91409e-08Z"
                      fill="#0FA958"/>
            </svg>
            <span>
                {title}
            </span>
        </button>
    );
};

export default CustomButton;