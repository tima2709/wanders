import React from 'react';
import style from './previewImg.module.css';



const SelectedPreviewImg = ({selectedImg, setSelectedImg, tourDays}) => {

    const handleDelete = (img, idx) => {

    }



    return (
        <div className={style.preview_row}>
            {
                selectedImg.map((el, idx) => (
                    <div key={idx} className={style.preview_col_3}>
                        <img src={el} alt=""/>
                        <button
                            className={style.deleteIcon}
                            onClick={() => handleDelete(el, idx)}
                        >
                            &times;
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default SelectedPreviewImg;