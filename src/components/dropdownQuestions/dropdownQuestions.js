import React, {useState} from 'react';
import dropdownStyle from './dropdownQ.module.css'
import PlusIcon from "../../components/icons/plusIcon";
import MinusIcon from "../icons/minusIcon";

const DropdownQ = ({question}) => {

    const [dropdownState, setDropdownState] = useState(false);

    const handleDropdownClick = () => {
        setDropdownState(!dropdownState);
    };

    return (
        <div className={dropdownStyle.dropdown}>
            <button onClick={handleDropdownClick} className={dropdownStyle.question}>
                {question} {dropdownState ? <MinusIcon/> : <PlusIcon/>}
            </button>
            <div
                className={`${dropdownStyle.dropdown_items} ${
                    dropdownState ? dropdownStyle.isVisible : dropdownStyle.isHidden
                }`}
            >
                <div className={dropdownStyle.dropdown_item}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et labore quidem sequi
                        temporibus. Assumenda earum est et fugiat nihil, odit omnis optio quasi ratione rem
                        sapiente sit voluptate voluptates?</p>
                </div>
            </div>
        </div>
    );
}
export default DropdownQ;