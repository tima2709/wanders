import React from 'react';
import styles from './styles.module.css'
import {Link} from "react-router-dom";

const AboutProject = () => {
    return (
        <div className={styles.about_project}>
            <p>О проекте</p>
            <div className={styles.about_project__links}>
                <Link to={'/'}>Как это работает?</Link>
                <Link to={'/'}>О нас</Link>
                <Link to={'/'}>Поддержка и контакты</Link>
            </div>
        </div>

    );
};

export default AboutProject;