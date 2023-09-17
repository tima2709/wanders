import React from 'react';
// import {useForm} from "react-hook-form";
// import {useDispatch} from "react-redux";
// import {userAuthLogin} from "../../redux/actions/userAction";
import styles from './style.module.css'
import SideBar from "../../components/sideBar";
import Header from "../../components/header/header";


const HomePage = () => {

    // console.log(styles)
    return (
        <div className="container">
            <div className={styles.page}>
                <SideBar/>
                <div className={styles.page_main}>
                    <Header/>
                </div>
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta dolores ducimus, ea eius enim et ex facilis fugiat, illo praesentium provident quaerat, rem. Amet asperiores beatae deserunt dicta dolores error expedita, explicabo facilis iure magnam minima neque nostrum, nulla pariatur quaerat quo sapiente, suscipit! Accusamus hic laboriosam libero natus qui ullam voluptatum! Aspernatur maiores perferendis rem tempore vitae voluptatibus. Aliquid animi asperiores consectetur consequatur cupiditate et eum ex fugit ipsum iste labore laboriosam laborum magni neque nesciunt odio optio pariatur placeat, quaerat saepe sequi, soluta ullam unde velit veritatis vero, voluptates. Ad cupiditate doloremque illum laborum nesciunt? Aspernatur, voluptatibus.</p>*/}
            </div>
        </div>

    );
};

export default HomePage;