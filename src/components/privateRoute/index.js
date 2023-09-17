import React from 'react';
import {Navigate} from "react-router-dom";
import {isAuth} from "../../lib/helper";

const PrivateRoute = ({ children }) => {
    const isAUth = isAuth()
    return  isAUth ? children : <Navigate to={'/login'}/>
};

export default PrivateRoute;