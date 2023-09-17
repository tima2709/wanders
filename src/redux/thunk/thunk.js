import axios from "axios";
import {
    authRegisterErrorActionCreator,
    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator
} from "../actions/userAction";

const authRegisterUser = (data) => async (dispatch) => {
    dispatch(authRegisterRequestActionCreator())
    try {
        const res = await axios.post("http://35.87.1.163/api/account/register/", data)
        dispatch(authRegisterSuccessActionCreator(res.data))
    } catch (err) {
        dispatch(authRegisterErrorActionCreator(err.response.data.username))
        throw err
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    authRegisterUser
}