import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import TourCurrency from "../../components/priceAndDatesComponent/Tourcurrency";
// import Multiselect from 'multiselect-react-dropdown';
import './styles.css'
import GroupDates from "../../components/priceAndDatesComponent/GroupDates";


const PriceAndDatesPage = () => {
    const [currency, setCurrency] = useState('')

    return (
        <Layout>
            <TourCurrency onSelect={setCurrency}/>
            <GroupDates/>
        </Layout>
    );
};

export default PriceAndDatesPage;