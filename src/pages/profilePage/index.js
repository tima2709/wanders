import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {userAuthLogOut} from "../../redux/actions/userAction";
import {useNavigate} from "react-router-dom";
import {isAuth} from "../../lib/helper";
import Layout from "../../components/Layout";

const ProfilePage = () => {
    const username = localStorage.getItem('username')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(userAuthLogOut())
        navigate('/login')
    }

    // useEffect(() => {
    //     if (!isAuth()){
    //         navigate('/login')
    //     }
    // },[isAuth()])

    return (
        <>
           <Layout>
               <h2>hello {username}</h2>
               <button onClick={handleLogOut}>log out</button>
           </Layout>
        </>
    );
};

export default ProfilePage;