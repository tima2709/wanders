import React from 'react';
import addInput from './customInput.module.css'


const CustomInput = ({name, type, value, onChange, placeholder}) => {
    return (
        <div className={addInput.input_contain}>
            <input
                className={addInput.addInput}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
            <label  className={addInput.placeholder_text} htmlFor=""><div className={addInput.text}>{placeholder}</div></label>
        </div>
    );
};

export default CustomInput;