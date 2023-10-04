import React, {useEffect} from 'react';
import SideBar from "../../components/sideBar";
import Header from "../../components/header/header";
import {useDispatch, useSelector} from "react-redux";
import {getTourList} from "../../redux/actions/tourAction";
import {tours} from "../../redux/selectors";
import TourCard from "../../components/TourCard/TourCard";
import Layout from "../../components/Layout";

const ToursPage = () => {

    const tours_data = useSelector(tours)


    // console.log(tours_data)


    return (
        <>
            <Layout>
                { tours_data.length &&
                    <TourCard tours={tours_data}/>
                }
            </Layout>
        </>
    );
};

export default ToursPage;