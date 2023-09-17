import {USER_AUTH_LOG_OUT, USER_AUTH_LOGIN, USER_AUTH_REGISTER} from "../types";

const initialState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    username: null,
    token: null,
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        // case USER_AUTH_REGISTER.REQUEST:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: null,
        //     }
        // case USER_AUTH_REGISTER.SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         isAuthenticated: true,
        //         responseMessage: action.payload,
        //         error: null
        //     }
        // case USER_AUTH_REGISTER.ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //         isAuthenticated: false,
        //         error: action.payload
        //     }
        case USER_AUTH_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
            }
        case USER_AUTH_LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                username: null
            }
        default:
            return state
    }
}

export {
    userReducers
}