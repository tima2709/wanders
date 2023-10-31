import React from 'react';
import accommodationStyle from "../../../pages/accommodationPage/accommodation.module.css";
import CustomRadioInput from "../../customRadioInput/customRadioInput";

const ComfortLevel = ({tourAdd, setTourAdd}) => {
    const handleComfort = (e) => {
        setTourAdd({...tourAdd, comfort: e.target.value})
    }
    return (
        <div className={accommodationStyle.wrapper}>
            <h1>Уровень комфорта в туре</h1>
            <p>Вы можете выбрать несколько вариантов, если тур предполагает выбор уровня комфорта по желанию
                клиента </p>
            <div className={accommodationStyle.radio_input}>
                <CustomRadioInput
                    value={"Base"}
                    name={"comfort"}
                    checked={tourAdd.comfort === "Base"}
                    onChange={(e) => handleComfort(e)}
                    label={"Базовый"}
                    housing={"Палатки, кемпинги, хижины"}
                />
                <CustomRadioInput
                    value="Simple"
                    name={'comfort'}
                    checked={tourAdd.comfort === "Simple"}
                    onChange={(e) => handleComfort(e)}
                    label={"Простой"}
                    housing={"Гостевые дома, гостиницы 1*, дома на колесах"}
                />
                <CustomRadioInput
                    value="Medium"
                    name={'comfort'}
                    checked={tourAdd.comfort === "Medium"}
                    onChange={(e) => handleComfort(e)}
                    label={"Средний"}
                    housing={"Гостиницы 2**, апартаменты, коттеджи"}
                />
                <CustomRadioInput
                    value="luxury"
                    name={'comfort'}
                    checked={tourAdd.comfort === "luxury"}
                    onChange={(e) => handleComfort(e)}
                    label={"Выше среднего"}
                    housing={"Гостиницы 3***, виллы"}
                />
                <CustomRadioInput
                    value="Premium"
                    name={'comfort'}
                    checked={tourAdd.comfort === "Premium"}
                    onChange={(e) => handleComfort(e)}
                    label={"Высокий"}
                    housing={"Гостиницы 4-5***, глэмпинги, бутик-отели"}
                />
            </div>
        </div>
    );
};

export default ComfortLevel;