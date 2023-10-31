import React from 'react';
import inputRadio from './customRadioInput.module.css'

const CustomRadioInput = ({checked, onChange, label, value, name, housing}) => {
    return (
        <>
            <label className={inputRadio.label_radio}>
                <div>
                    <input
                        type="radio"
                        value={value}
                        name={name}
                        checked={checked}
                        onChange={onChange}
                    />


                </div>
                <div className={inputRadio.comfort_desc}>
                    <h4>{label}</h4>
                    <span>{housing}</span>
                </div>
            </label>
        </>
    );
};

export default CustomRadioInput;