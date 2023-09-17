import React from 'react';
import SideBar from "../../components/sideBar";
import Header from "../../components/header/header";

const ToursPage = () => {
    return (
        <div className={'container'}>
            <div className="page">
                <SideBar/>
                <div className="page_main">
                    <Header/>
                </div>
            </div>
        </div>
    );
};

export default ToursPage;