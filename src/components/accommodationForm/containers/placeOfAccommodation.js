import React from 'react';
import accommodationStyle from "../../../pages/accommodationPage/accommodation.module.css";
import Select from "react-select";
import CustomInput from "../../customInput/customInout";
import ForDescription from "../../forDescription/forDescription";
import InputFile from "../../inputFile/inputFile";
import CustomButton from "../../customButton/customButton";
import {hotels} from "../../../pages/accommodationPage/accommodation";
import SelectedPreviewImg from "../../selectedPreviewImage/selectedPreviewImg";
import PlusIcon from "../../icons/plusIcon";
import MinusIcon from "../../icons/minusIcon";

const PlaceOfAccommodation = ({tourHotels, setTourHotels}) => {
    // const [selectedImg, setSelectedImg] = useState([])

    const options = [
        {value: 'Tent', label: 'Tent'},
        {value: 'Hotel', label: 'Hotel'},
        {value: 'Hostel', label: 'Hostel'},
        {value: 'Cottage', label: 'Cottage'},
    ];

    const handlePlusQtyNights = (index) => {
        const newQtyOfNights = [...tourHotels]
        newQtyOfNights[index].qtyNight = ++newQtyOfNights[index].qtyNight
        setTourHotels(newQtyOfNights)
    }

    const handleMinusQtyNights = (index) => {
        const newQtyOfNights = [...tourHotels]
        newQtyOfNights[index].qtyNight = --newQtyOfNights[index].qtyNight
        setTourHotels(newQtyOfNights)
    }

    function addFieldHotel() {
        const addedHotel = [...tourHotels]
        const dynamicInputHotel = {...hotels}
        addedHotel.push(dynamicInputHotel)
        setTourHotels(addedHotel)
    }

    function handleChangeHotelTitle(event, index) {
        const newHotelValue = [...tourHotels]
        newHotelValue[index].hotelTitle = event
        setTourHotels(newHotelValue)
    }

    function handleChangeHotelType(event, index) {
        const newHotelValue = [...tourHotels]
        newHotelValue[index].type = event
        setTourHotels(newHotelValue)
    }

    function handleChangeHotelDesc(event, index) {
        const newHotelValue = [...tourHotels]
        newHotelValue[index].hotelDescription = event
        setTourHotels(newHotelValue)
    }

    function handleChangeHotelImages(event, index) {
        const newHotelValue = [...tourHotels]
        const files = Array.from(event)
        const imgArray = files.map((file) => URL.createObjectURL(file))
        // let images = []
        //
        // images.concat(imgArray)
        newHotelValue[index].selectedImg = imgArray
        newHotelValue[index].hotelImages = event
        setTourHotels(newHotelValue)
        // setTourHotels(tourHotels[0].selectedImg.concat(imgArray))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = JSON.stringify(tourHotels)
        console.log(data, 'data')
        localStorage.setItem('accommodation', data)
    }

    console.log(tourHotels, 'hotel')
    return (
        <div className={accommodationStyle.wrapper}>
            <form onSubmit={handleSubmit}>
                <ol>
                    {
                        tourHotels.map((item, index) => (
                            <div key={index}>
                                <li><h1>Место проживания</h1></li>
                                <div className={accommodationStyle.qtyNights}>
                                    <button
                                        type="button"
                                        disabled={tourHotels[index].qtyNight === 1}
                                        onClick={() => handleMinusQtyNights(index)}
                                    >
                                        <MinusIcon/>
                                    </button>
                                    <span>{tourHotels[index].qtyNight}</span>
                                    <button type="button" onClick={() => handlePlusQtyNights(index)}>
                                        <PlusIcon/>
                                    </button>
                                </div>

                                <h3>Варианты проживания на выбор в этот период тура</h3>
                                <div className={accommodationStyle.select_variants}>
                                    <Select
                                        options={options}
                                        value={item.type?.value}
                                        onChange={(e) => handleChangeHotelType(e?.value, index)}
                                        placeholder={"Тип проживания"}
                                    />
                                </div>
                                <div className={accommodationStyle.acc_title}>
                                    <CustomInput
                                        type="text"
                                        name={'hotelTitle'}
                                        placeholder={'Заголовок'}
                                        value={item.hotelTitle}
                                        onChange={(e) => handleChangeHotelTitle(e.target.value, index)}
                                    />
                                </div>
                                <div className={accommodationStyle.acc_desc}>
                                    <ForDescription
                                        placeholder={'description_hotel'}
                                        value={item.hotelDescription}
                                        onChange={(e) => handleChangeHotelDesc(e, index)}
                                    />
                                </div>
                                <div className={accommodationStyle.upload_pic}>
                                    <h3>Добавить фотографии</h3>
                                    <InputFile onChange={(e) => handleChangeHotelImages(e.target.files, index)}/>
                                    <SelectedPreviewImg selectedImg={tourHotels[index].selectedImg}/>
                                </div>

                            </div>
                        ))
                    }
                </ol>
                <CustomButton
                    type={'button'}
                    onClick={addFieldHotel}
                    title={'Добавить проживание'}
                />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default PlaceOfAccommodation;