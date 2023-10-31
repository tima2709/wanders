import React, {useState} from 'react';
import createTour from './style.module.css'
import InputFile from "../inputFile/inputFile";
import CustomButton from "../customButton/customButton";
import CustomInput from "../customInput/customInout";
import ForDescription from "../forDescription/forDescription";
import SelectedPreviewImg from "../selectedPreviewImage/selectedPreviewImg";

const CreateTourDays = () => {
    const [tourDays, setTourDays] = useState([{...days}])



    function addFieldDays() {
        const added = [...tourDays]
        const dynamicInput = {...days}
        added.push(dynamicInput)
        setTourDays(added)
    }

    function handleChangeDayTitle(event, index) {
        const valueNew = [...tourDays]
        valueNew[index].daysTitle = event
        setTourDays(valueNew)
    }

    function handleChangeDayDesc(event, index) {
        const valueNew = [...tourDays]
        valueNew[index].daysDescription = event
        setTourDays(valueNew)
    }

    function handleChangeDayImages(event, index) {
        const valueNew = [...tourDays]
        const files = Array.from(event)
        const imgArray = files.map((file) => URL.createObjectURL(file))

        valueNew[index].daysImages = event
        valueNew[index].selectedImg = imgArray

        setTourDays(valueNew)
        // setSelectedImg(selectedImg.concat(imgArray))

    }

    function handleSubmit (e) {
        e.preventDefault()
        const data = JSON.stringify(tourDays)
        console.log(data, 'data')
        localStorage.setItem('tourDays', data)
    }

    return (
        <div className={createTour.section_addDays}>
            <div className={createTour.container}>
                <div className={createTour.addDays}>
                    <form onSubmit={handleSubmit}>
                        <ol>
                            {
                                tourDays.map((item, index) => (
                                    <div key={index}>
                                        <div className={createTour.title_day}>
                                            <li><h1>День</h1></li>
                                            <CustomInput
                                                type={"text"}
                                                name={"daysTitle"}
                                                placeholder={'Заголовок дня'}
                                                value={item.daysTitle}
                                                onChange={(e) => handleChangeDayTitle(e.target.value, index)}
                                            />
                                        </div>
                                        <div className={createTour.desc_day}>
                                            <h3>Описание</h3>
                                            <ForDescription
                                                name={'daysDescription'}
                                                placeholder={'description days'}
                                                value={item.daysDescription}
                                                onChange={(e) => handleChangeDayDesc(e, index)}
                                            />
                                        </div>
                                        <div className={createTour.add_image}>
                                            <h3>Добавить фотографии</h3>
                                            <InputFile onChange={(e) => handleChangeDayImages(e.target.files, index)}/>
                                        </div>
                                        <SelectedPreviewImg tourDays={tourDays} selectedImg={tourDays[index].selectedImg} setSelectedImg={setTourDays}/>
                                    </div>
                                ))
                            }
                        </ol>
                        <CustomButton type={'submit'} title={'Сохранить'}/>
                    </form>
                    <div className={'btn_add_day'}>
                        <CustomButton
                            type={'button'}
                            onClick={addFieldDays}
                            title={'Добавить день'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTourDays;

export const days = {
    daysTitle: '',
    daysDescription: '',
    daysImages: [],
    selectedImg: [],
};