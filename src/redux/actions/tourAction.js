import axios from "axios";
import {GET_TOURS_LIST} from "../types";

const getTourList = () => {
    return dispatch => {
        axios.get('http://16.171.225.51/tours/')
            .then(data => {
                // console.log(data)
                dispatch({type: GET_TOURS_LIST, payload: data.data})
            })
    }
}

export {
    getTourList,
}