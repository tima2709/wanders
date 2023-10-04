import React from 'react';
// import {Link} from "react-router-dom";
import imgTour from './assets/image 481 (1).png'
import imgUser from './assets/unsplash_LaK153ghdig.png'
import style from './TourCard.module.css'
import LikeBtn from "../Like-Button/LikeBtn";
import EkoIcon from "../icons/ekoIcon";
import StarIcon from "../icons/StarIcon";
import InfoIcon from "../icons/infoIcon";

const TourCard = ({tours}) => {

    console.log(tours)

    return (
        <div className={style.container}>

            <div className={style.row}>

                {
                    tours?.map((tour, idx) => {
                        return (
                            <div className={style.col3} key={idx}>
                                <div className={style.box}>
                                    <div className={style.imgWrap}>
                                            <p className={style.type}>На чиле</p>
                                        <LikeBtn tour={tour}/>
                                        <img className={style.imgTour} src={tour.tour_images[0].image} alt=''/>
                                        <div className={style.userWrap}>
                                            <div className={style.user}><img className={style.userWrapImg} src={imgUser} alt=""/>
                                                <h2 className={style.h2}>Алия К.</h2></div>
                                            {
                                            <div>
                                                <p className={style.ecoSvg}>
                                                    <EkoIcon/>
                                                </p>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <h3>
                                            <span>
                                                <StarIcon/>
                                            </span> Новый <span>· Чуйская обл.</span></h3>
                                        <p>{tour.title_tour}</p>
                                        <h2>800 с / <span> 1 день</span></h2>
                                       <div className={style.level}> <p>Базовый </p><button>
                                           <InfoIcon/>
                                       </button></div>
                                        <div className={style.date}><p>29 августа </p><button className={style.greenBtn}>+ 3 даты</button></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
};

export default TourCard;