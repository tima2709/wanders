import React, {useState} from 'react';
import {Link} from "react-router-dom";
import SearchAndDatePicker from "../searchAndDatePicker";
import FavoriteIcon from "../icons/favoriteIcon";
import MessageIcon from "../icons/messageIcon";
import headerStyle from "./header.module.css";
import img from '../assets/unsplash_78A265wPiO4.png'




const Header = () => {

    const [dropdownUser, setDropdownUser] = useState(false)
    const [dropdownValue, setDropdownValue] = useState([1])

    const handleClickDropdown = () => {
        setDropdownUser(!dropdownUser)
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
            <div className={headerStyle.dropdown}>
                <div onClick={handleClickDropdown} className={headerStyle.dropdown_btn}>
                    <img className={headerStyle.userImg} src={img} alt=""/>
                    <span>user</span>
                </div>
                <div className={`${headerStyle.dropdown_items} ${dropdownUser ? headerStyle.isVisible : headerStyle.isHidden}`}>
                    <div className={headerStyle.dropdown_item}>
                        <Link to={'/setting'}><span>Настройки профиля</span></Link>
                    </div>
                    <div className={headerStyle.dropdown_item}>
                        <Link to={'/logout'}><span>Выход</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;