import React, {useState} from 'react';
import accommodationStyle from './accommodation.module.css';
import ComfortLevel from "../../components/accommodationForm/containers/comfortLevel";
import DescOfAccommodation from "../../components/accommodationForm/containers/descOfAccommodation";
import PlaceOfAccommodation from "../../components/accommodationForm/containers/placeOfAccommodation";

const Accommodation = () => {
    const [tourAdd, setTourAdd] = useState({
        accommodationTitle: '',
        accommodationDescription: '',
        comfort: '',
    })
    const [tourHotels, setTourHotels] = useState([{...hotels}])


    return (
        <div className={accommodationStyle.section_accommodation}>
            <div className={accommodationStyle.container}>
                <ComfortLevel
                    tourAdd={tourAdd}
                    setTourAdd={setTourAdd}
                />
                <DescOfAccommodation
                    tourAdd={tourAdd}
                    setTourAdd={setTourAdd}
                />
                <PlaceOfAccommodation
                    tourHotels={tourHotels}
                    setTourHotels={setTourHotels}
                    tourAdd={tourAdd}
                    setTourAdd={setTourAdd}
                />
            </div>
        </div>
    );
};

export default Accommodation;

export const hotels = {
    hotelTitle: '',
    hotelDescription: '',
    hotelImages: [],
    selectedImg: [],
    qtyNight: 1,
    type: '',
};