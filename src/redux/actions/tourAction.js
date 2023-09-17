import axios from "axios";
import {GET_TOURS_LIST} from "../types";

const getTourList = () => {
    return dispatch => {
        axios.get('http://13.51.175.171/tours/')
            .then(data => {
                console.log(data)
                dispatch({type: GET_TOURS_LIST, payload: data})
            })
    }
}

export {
    getTourList,
}