import React from 'react';
import Header from "../header/header";
import SideBar from "../sideBar";

const Layout = ({children}) => {
    return (
        <div className={'container'}>
            <div className='page'>
            <SideBar/>
               <div className={'layout'}>
                   <Header/>
                   {children}
               </div>
            </div>
        </div>
    );
};

export default Layout;