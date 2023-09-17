import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userAuthLogin} from "../../redux/actions/userAction";
import {useForm} from "react-hook-form";
import style from './style.module.css'
import {user} from "../../redux/selectors";
import {useNavigate} from "react-router-dom";
import {isAuth} from "../../lib/helper";

const LoginPage = () => {


    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const state = useSelector(user)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        dispatch(userAuthLogin(data))
        // console.log(data)
        // console.log(state, 'state')
        // navigate('/')
    }

    useEffect(() => {
        if (isAuth()){
            navigate('/')
        }
    },[isAuth()])


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={style.login_form}>
                <h4>Login Page</h4>
                <input placeholder={'username'} type="text" {...register("username", { required: true })} />
                <input placeholder={'password'} type="password" {...register("password", { required: true })}/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default LoginPage;

