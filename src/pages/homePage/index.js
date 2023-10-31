import React from 'react';
import {Link} from "react-router-dom";
import styles from './style.module.css'
import SideBar from "../../components/sideBar";
import Header from "../../components/header/header";
import img1 from "../../components/assets/11.jpg";
import img2 from '../../components/assets/12.jpg';
import img3 from '../../components/assets/13.jpg';
import img4 from '../../components/assets/21.jpg';
import img5 from '../../components/assets/22.jpg';
import img6 from '../../components/assets/23.png';
import img7 from '../../components/assets/image 584.png';
import img8 from '../../components/assets/image 585.png';
import rucksack from '../../components/assets/rucksack.png';
import peace from '../../components/assets/image 566.png'
import ArrowIcon from "../../components/icons/arrowIcon";
import DropdownQ from "../../components/dropdownQuestions/dropdownQuestions";
import ArrowKyishakIcon from "../../components/icons/arrowKyishakIcon";

const HomePage = () => {


    return (
        <div className={styles.page}>
            <div className={styles.sideBar}><SideBar/></div>
            <div className={styles.page_main}>
                <Header/>
                <div>
                    <section className={styles.helloSection}>
                        <div className={styles.aboutWanders}>
                            <div className={styles.helloWanders}>

                                <h1>Привет</h1>
                                <h1>Это Wanders</h1>
                                <div className={styles.peaceIcon}><img src={peace} alt=""/></div>
                            </div>
                            <div className={styles.descriptionWanders}>
                                <p>Сервис по поиску и бронированию авторских туров.</p>
                                <p>Авторские туры — отлично организованные приключения по уникальным маршрутам в
                                    дружеской компании. Приглашаем авторов зарегистрироваться на Wanders, разместить
                                    свои туры и получать бронирования от наших пользователей.</p>
                            </div>
                            <div>
                                <span className={styles.ourMission}>
                                    Наша миссия — вдохновить людей на настоящие и насыщенные путешествия
                                </span>
                                <div className={styles.rucksack}><img src={rucksack} alt=""/></div>
                            </div>
                        </div>

                    </section>
                    <section className={styles.tourBooking}>
                        <h1>Как забронировать тур?</h1>
                        <div className={`${styles.row} ${styles.bookingRow}`}>
                            <div className={styles.col_4}>
                                <div className={`${styles.box1} ${styles.booking}`}>
                                    <h3>Выбери тур</h3>
                                    <p>Переходи в раздел туры. Выбери понравившийся тур. Ознакомься с программой и датой тура</p>
                                </div>
                            </div>
                            <div className={styles.col_4}>
                                <div className={`${styles.box2} ${styles.booking}`}>
                                    <h3>Оставь заявку</h3>
                                    <p>Понравился тур? Оставь заявку на сайте и организатор сам с тобой свяжется</p>
                                </div>
                            </div>
                            <div className={styles.col_4}>
                                <div className={`${styles.box3} ${styles.booking}`}>
                                    <h3>Наслаждайся поездкой</h3>
                                    <p>А вот и настал день тура. Отбрось все проблемы позади и насладись путешествием!</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.ourTourCollection}>
                        <h1>Наши коллукции туров</h1>
                        <div>
                            <div className={styles.row}>
                                <div className={styles.col_4}>
                                    <div className={styles.box}>
                                        <img src={img1} alt=""/>
                                        <div className={styles.categoryTour}>
                                            <span>ФОТО</span>
                                            <span>ТУРЫ</span>
                                        </div>
                                        <div className={styles.arrowIcon}><ArrowIcon/></div>
                                    </div>
                                </div>
                                <div className={styles.col_4}>
                                    <div className={styles.box}>
                                        <img src={img2} alt=""/>
                                        <div className={styles.categoryTour}>
                                            <span>ЭТНО</span>
                                            <span>ТУРЫ</span>
                                        </div>
                                        <div className={styles.arrowIcon}><ArrowIcon/></div>
                                    </div>
                                </div>
                                <div className={styles.col_4}>
                                    <div className={styles.box}>
                                        <img src={img3} alt=""/>
                                        <div className={styles.categoryTour}>
                                            <span>ЭКО</span>
                                            <span>ТУРЫ</span>
                                        </div>
                                        <div className={styles.arrowIcon}><ArrowIcon/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={'/tours'}  className={styles.homePageBtn}><button>Смотреть еще</button></Link>
                    </section>
                    <section className={styles.ourTourCollection}>
                        <h1>Узнай больше о локации</h1>
                        <div>
                            <div className={styles.row}>
                                <div className={styles.col_4}>
                                    <div className={styles.box}>
                                        <img src={img4} alt=""/>
                                        <div className={styles.categoryTour}>
                                            <span>КОЛ-</span>
                                            <span>ТОР</span>
                                        </div>
                                        <div className={styles.arrowIcon}><ArrowIcon/></div>
                                    </div>
                                </div>
                                <div className={styles.col_4}>
                                    <div className={styles.box}>
                                        <img src={img5} alt=""/>
                                        <div className={styles.categoryTour}>
                                            <span>АЛА-</span>
                                            <span>АРЧА</span>
                                        </div>
                                        <div className={styles.arrowIcon}><ArrowIcon/></div>
                                    </div>
                                </div>
                                <div className={styles.col_4}>
                                    <div className={styles.box}>
                                        <img src={img6} alt=""/>
                                        <div className={styles.categoryTour}>
                                            <span>СОН</span>
                                            <span>КОЛ</span>
                                        </div>
                                        <div className={styles.arrowIcon}><ArrowIcon/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={'/locations'}  className={styles.homePageBtn}><button>Смотреть еще</button></Link>
                    </section>
                    <section className={styles.ourTourCollection}>
                        <h1>Часто задаваемые вопросы</h1>
                        <div className={styles.row}>
                            <div className={styles.col_6}>
                                <div className={styles.boxDrop}>
                                    <DropdownQ question={'Как забронировать тур?'}/>
                                </div>
                            </div>
                            <div className={styles.col_6}>
                                <div className={styles.boxDrop}>
                                    <DropdownQ question={'Какой должен быть опыт организации?'}/>
                                </div>
                            </div>
                            <div className={styles.col_6}>
                                <div className={styles.boxDrop}>
                                    <DropdownQ question={'Как начать работать с Wanders?'}/>
                                </div>
                            </div>
                            <div className={styles.col_6}>
                                <div className={styles.boxDrop}>
                                    <DropdownQ question={'Как зарегистрироваться?'}/>
                                </div>
                            </div>
                            <div className={styles.col_6}>
                                <div className={styles.boxDrop}>
                                    <DropdownQ question={'Где я могу почитать о локациях?'}/>
                                </div>
                            </div>
                            <div className={styles.col_6}>
                                <div className={styles.boxDrop}>
                                    <DropdownQ question={'Какие требования к авторам туров?'}/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.ourTourCollection}>
                        <div>
                            <div className={styles.rowFooter}>
                                <div className={styles.col_6}>
                                    <div className={styles.boxFooter1}>
                                        <p>Ты любишь проводить туры, но не знаешь с чего начать</p>
                                        <div className={styles.arrowKyishakIcon}><ArrowKyishakIcon/></div>
                                        <span className={styles.clickHere}>жми сюда</span>
                                        <button>Узнать больше</button>
                                        <div className={styles.img7}><img src={img7} alt=""/></div>
                                        <div className={styles.img8}><img src={img8} alt=""/></div>
                                    </div>
                                </div>
                                <div className={styles.col_6}>
                                    <div className={styles.boxFooter2}>
                                        <h2>Остались вопросы?</h2>
                                        <div className={styles.contactFooter}>
                                            <span>Whatsapp</span>
                                            <h5>+996(999)999-999</h5>
                                        </div>
                                        <div className={styles.contactFooter}>
                                            <span>Telegram</span>
                                            <h5>+996(999)999-999</h5>
                                        </div>
                                        <div className={styles.contactFooter}>
                                            <span>Почта</span>
                                            <h5>wanderstrips@gmail.com</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>


    );
};

export default HomePage;