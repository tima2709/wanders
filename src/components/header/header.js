import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import SearchAndDatePicker from "../searchAndDatePicker";
import FavoriteIcon from "../icons/favoriteIcon";
import MessageIcon from "../icons/messageIcon";
import headerStyle from "./header.module.css";
import img from '../assets/unsplash_78A265wPiO4.png'
import {useDispatch, useSelector} from "react-redux";
import {user} from "../../redux/selectors";
import {isAuth} from "../../lib/helper";
import {userAuthLogOut} from "../../redux/actions/userAction";



const Header = () => {

    const [dropdownUser, setDropdownUser] = useState(false)
    const [dropdownValue, setDropdownValue] = useState([1])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClickDropdown = () => {
        setDropdownUser(!dropdownUser)
    }

    const user_data = useSelector(user)
    // console.log(user_data)
    const handleLogOut = () => {
        dispatch(userAuthLogOut())
    }


    return (
        <div className={headerStyle.header}>
            <SearchAndDatePicker/>
            <div className={headerStyle.icons}>
                <FavoriteIcon/>
                <Link to={'/favorite'}><span>Избранное</span></Link>
            </div>
            <div className={headerStyle.icons}>
                <MessageIcon/>
                <Link to={'/messages'}><span>Сообщения</span></Link>
            </div>
            {
                isAuth() ?
                    <div className={headerStyle.dropdown}>
                        <div onClick={handleClickDropdown} className={headerStyle.dropdown_btn}>
                            {/*<img className={headerStyle.userImg} src={img} alt=""/>*/}
                            <span className={headerStyle.userImgLogo}>{localStorage.getItem("username")[0].toUpperCase()}</span>
                            <span>{localStorage.getItem("username")}</span>
                        </div>
                        <div className={`${headerStyle.dropdown_items} ${dropdownUser ? headerStyle.isVisible : headerStyle.isHidden}`}>
                            <div className={headerStyle.dropdown_item}>
                                <Link to={'/profile'}><span>Настройки профиля</span></Link>
                            </div>
                            <div onClick={() => handleLogOut()} className={headerStyle.dropdown_item}>
                                <span >Выход</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={headerStyle.dropdown}>
                        <button onClick={() => navigate('/login')} className={headerStyle.signInBtn}>войти</button>
                    </div>
                        }


        </div>
    );
};

export default Header;