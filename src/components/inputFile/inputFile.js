import React from 'react';
import inputFile from './inputFile.module.css'

const InputFile = ({onChange}) => {
    return (
        <label className={inputFile.inputFile_label}>
            <div className={inputFile.inputFile_svg_span}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7Z"
                          fill="#0FA958"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8ZM6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9Z"
                          fill="#0FA958"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.9269 14.0746C15.4966 13.7161 14.8558 13.7808 14.5059 14.2182L12.9067 16.2172C11.9455 17.4187 10.2252 17.6857 8.94492 16.8322C8.52786 16.5542 7.96743 16.6412 7.6543 17.0326L4.78049 20.6249L3.21875 19.3755L6.09256 15.7832C7.05376 14.5817 8.77407 14.3146 10.0543 15.1681C10.4714 15.4462 11.0318 15.3592 11.3449 14.9678L12.9441 12.9688C13.9938 11.6567 15.9164 11.4625 17.2073 12.5382L21.6398 16.232L20.3594 17.7684L15.9269 14.0746Z"
                          fill="#0FA958"/>
                </svg>
                <span className={inputFile.upload}>Загрузить фото с устройства</span>
            </div>
            <input
                className={inputFile.inputNone}
                accept={'image/*, .png, .jpg, .gif, .web,'}
                type='file'
                multiple={true}
                onChange={onChange}
            />
        </label>
    );
};

export default InputFile;