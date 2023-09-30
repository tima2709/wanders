import React from 'react';
import {useDispatch} from "react-redux";
// import {editFavorite} from "../../redux/actions/TourAction";
import style from "./style.module.css";
import RedLikeIcon from "../icons/RedLikeIcon";
import DislikeIcon from "../icons/DislikeIcon";

const LikeBtn = ({tour}) => {
    // const dispatch = useDispatch()
    //
    // const handleEditFavorite = (object) => {
    //     if (object.like) {
    //         const new_value = {...object, like: false}
    //         dispatch(editFavorite(new_value))
    //     } else {
    //         const new_value = {...object, like: true}
    //         dispatch(editFavorite(new_value))
    //     }
    // }

    return (
        <div>
            {/*<button className={style.likeBtn} onClick={() => handleEditFavorite(tour)}>*/}
            <button className={style.likeBtn} >
                {
                    1 > 0 ?
                    <RedLikeIcon/>
                    :
                    <DislikeIcon/>
                }
            </button>
        </div>
    );
};

export default LikeBtn;