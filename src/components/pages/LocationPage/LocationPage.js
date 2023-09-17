import React, {useState} from 'react';
import style from './locationPage.module.css';
import img1 from '../../assets/unsplash_BKLHxgbYFDI.png';
import img2 from '../../assets/unsplash_Bkci_8qcdvQ.png';
import img3 from '../../assets/unsplash_78A265wPiO4.png';

const LocationPage = () => {

    const [descTour] = useState(desc)
    const [showMore, setShowMore] = useState(false)

    //474


    // console.log(descTour[0].description.length)

    return (
        <div className={style.container}>
            <div className={style.titleLocation}>
                <h1>Ущелье Ала-Арча</h1>
                <span>Чуйская область</span>
            </div>
            <section className={style.location}>
                <div className={style.row}>
                    <div className={style.col4}>
                        <div className={style.box}>
                            <p className={style.shortDesc}>
                                Ущелье Ала-Арча — это одна из самых знаменитых достопримечательностей Кыргызстана.
                                Располагается ущелье Ала-Арча в Чуйской области, и является национальным парком.
                            </p>
                            <div className={style.coordination}>
                                <span>Координаты:</span>
                                <p>42.565181, 74.482783</p>
                            </div>
                            <div className={style.typesOfTour}>
                                <span>Горы</span>
                                <span>Пикник</span>
                                <span>Походы</span>
                                <span>Семейный отдых</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.col8}>
                        <div className={style.imgGrid}>
                            <div className={style.box1}><img src={img1} alt=""/></div>
                            <div className={style.box2}><img src={img2} alt=""/></div>
                            <div className={style.box3}><img src={img3} alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.descriptionTour}>
                <h2>Описание</h2>
                <p>
                    Располагается ущелье Ала-Арча в Чуйской области, и является национальным парком. Ежегодно это
                    высокогорное ущелье принимает сотни тысяч туристов, как местных, так и иностранных. Причин такой
                    популярности несколько.
                    Во-первых, ущелье Ала-Арча находится всего в 30 километрах от Бишкека, потому сюда легко добраться и
                    есть вся необходимая туристическая инфраструктура: хорошая асфальтированная дорога, магазины,
                    гостиницы, кафе, и места для отдыха среди живописной природы.
                    Во-вторых, ущелье Ала-Арча имеет свои географические особенности — оно находится на центральной и
                    высочайшей части Кыргызского хребта — второго по длине хребта Тянь-Шаня. Потому именно здесь горы
                    вздымаются максимально высоко над равниной, и здесь же начинаются многочисленные тропы на высочайшие
                    пики Кыргызского хребта.Ала-Арча знаменита своей нетронутой природой: обширными еловыми лесами,
                    березовыми рощами, многочисленными родниками с чистой ледниковой водой и могучими скалами.
                </p>
            </section>
            <section className={style.whatIsThere}>
                <h3>Ала-Арчинчкий альплагерь</h3>
                <p>
                    {
                        descTour[0]?.description.slice(0, 476)
                    }
                    {
                        showMore
                            ? descTour[0]?.description.slice(476)
                            : '...'
                    }
                </p>
                <button
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Скрыть" : "Читать далее"}
                </button>
            </section>
        </div>
    );
};

export default LocationPage;

const desc = [
    {
        description: 'В ущелье Ала-Арча расположено большое количество маршрутов для хайкинга, треккинга, альпинизма искалолазания. Именно поэтому здесь располагается всемирно известный ала-арчинский альплагерь,основанный, без малого, почти 70 лет назад. Ежегодно отсюда совершается множество восхождений нагорные пики Тянь-Шаня, такие как пики Корона, Адыгене, Комсомолец, Учитель, Пионер, Свободная Корея,Бокс и наконец, высочайшую точку Кыргызского хребта, пик Семенова-Тян-Шанского (4876 м). Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis doloremque eum facilis fugit iusto nemo, rerum sed velit voluptates. Ab earum enim, excepturi expedita molestias necessitatibus nesciunt nihil perferendis possimus quaerat quia, quidem, quisquam repudiandae? Aliquam dignissimos harum inventore ipsa laboriosam nemo, omnis praesentium rem similique sunt temporibus voluptatem.'
    }
]