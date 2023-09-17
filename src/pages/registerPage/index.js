import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import auth from "../../redux/thunk/thunk";
import styles from './styles.module.css'
import {user} from '../../redux/selectors/index'
import {setUserData} from "../../services/token";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const {authRegisterUser} = auth
    const onSubmit = async (data) => {
        try {
            await dispatch(authRegisterUser(data))
            setUserData(data.username)
            navigate('/login')
            // router.push('/')
        } catch (err) {
            console.log(err)
        }
    };

    // console.log(type_user)
    // eslint-disable-next-line no-use-before-define
    const info = useSelector(user)
    console.log(info)
    const navigate = useNavigate()

    return (
        <div className={styles.container}>

            <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
                <h3>Register Page</h3>
                <input placeholder={'username'} type="text" {...register("username", { required: true })} />
                <input placeholder={'email'} type="email" {...register("email", { required: true })} />
                <input placeholder={'password'} type="password" autoComplete="new-password" {...register("password", { required: true })}/>
                <input placeholder={'password confirm'} autoComplete="new-password" type="password" {...register("password_confirm", { required: true })}/>

                <input placeholder={'business or root user'} type="checkbox" {...register("is_business", { required: true })}/>
                {/*<select  {...register("is_business", { required: true })} name="user_type" id="user_type">*/}
                {/*    <option value="false">prosto user</option>*/}
                {/*    <option value="true">business user</option>*/}
                {/*</select>*/}
                <input type="submit" />
                <p onClick={() => navigate('/login')}>login</p>
            </form>
        </div>
    );
};

export default RegisterPage;