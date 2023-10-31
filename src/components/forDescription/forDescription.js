import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ForDescription = ({value, onChange}) => {

    return (
        <>
            <ReactQuill
                className={'quill'}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default ForDescription;