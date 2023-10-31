import React, {useState} from 'react';
import accommodationStyle from "../../../pages/accommodationPage/accommodation.module.css";
import ForDescription from "../../forDescription/forDescription";
import InputFile from "../../inputFile/inputFile";
import SelectedPreviewImg from "../../selectedPreviewImage/selectedPreviewImg";

const DescOfAccommodation = ({tourAdd, setTourAdd}) => {
    const [selectedImg, setSelectedImg] = useState([])

    const handleAccDescImg = (event) => {
        const files = Array.from(event)
        const imgArray = files.map((file) => URL.createObjectURL(file))
        setSelectedImg(selectedImg.concat(imgArray))
    }

    return (
        <div className={accommodationStyle.wrapper}>
            <div className={accommodationStyle.wrapper_desc}>
                <h1>Общее описание проживания</h1>
                <p>Туристам важно знать, где они будут располагаться. Укажите, какие есть варианты размещения и
                    какие усоовия их ждут. Желательно дополнить информацию фотографиями</p>
                <ForDescription
                    placeholder={'description_accommodation'}
                    value={tourAdd.accommodationDescription}
                    onChange={(e) => setTourAdd({...tourAdd, accommodationDescription: e})}
                />
            </div>
            <div>
                <h1>Фотографии к описанию</h1>
                <p>Не используйте чужие фотографии без разрешения, за это можно получить крупный штраф!</p>
                <InputFile onChange={(e) => handleAccDescImg(e.target.files)}/>
                <SelectedPreviewImg selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
            </div>
        </div>
    );
};

export default DescOfAccommodation;