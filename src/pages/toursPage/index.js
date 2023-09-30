import React, {useEffect} from 'react';
import SideBar from "../../components/sideBar";
import Header from "../../components/header/header";
import {useDispatch, useSelector} from "react-redux";
import {getTourList} from "../../redux/actions/tourAction";
import {tours} from "../../redux/selectors";
import TourCard from "../../components/TourCard/TourCard";

const ToursPage = () => {

    const tours_data = useSelector(tours)


    // console.log(tours_data)


    return (
        <div className={'container'}>
            <div className="page">
                <SideBar/>
                <div className="page_main">
                    <Header/>
                    { tours_data.length &&
                        <TourCard tours={tours_data}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default ToursPage;