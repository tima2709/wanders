import {USER_AUTH_LOG_OUT, USER_AUTH_LOGIN, USER_AUTH_REGISTER} from "../types";
import axios from "axios";
import {history} from "../../lib/history";
import Cookies from "js-cookie";

// const userAuthRegister = (data) => {
//     return (dispatch) => {
//         axios.post('http://35.87.1.163/api/account/register/', data)
//             .then(data => {
//                 console.log(data)
//                 dispatch({type: USER_AUTH_REGISTER, payload: data})
//             })
//     }
// }

const authRegisterRequestActionCreator = () => ({
    type: USER_AUTH_REGISTER.REQUEST
})

const authRegisterSuccessActionCreator = (data) => ({
    type: USER_AUTH_REGISTER.SUCCESS,
    payload: data
})

const authRegisterErrorActionCreator = (err) => ({
    type: USER_AUTH_REGISTER.ERROR,
    payload: err
})

const userAuthLogin = (data) => {
    localStorage.setItem('username', data.username)
    return (dispatch) => {
        axios.post('http://35.87.1.163/api/account/login/', data)

            .then(data => {
                // console.log(data.data)
                dispatch({type: USER_AUTH_LOGIN, payload: data.data.access})

                Cookies.set('token', data.data.access)
                // dispatch(getCurrentUser())
                localStorage.setItem('token', JSON.stringify(data.data.access))
                localStorage.setItem('isAuth', JSON.stringify(true))
                history.push({ pathname: `/` }, { state: true })
            })
    }
}

const userAuthLogOut = () => {
    return (dispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('isAuth')
        Cookies.remove('token')
        dispatch({type: USER_AUTH_LOG_OUT})
        // history.push({ pathname: `/login` }, { state: true })
    }
}


export {
    userAuthLogin,


    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator,
    authRegisterErrorActionCreator,

    userAuthLogOut,
}