import React from 'react';
import about from "../../img/about.png"
import about2 from "../../img/abaut22.png"
import sertificate from "../../img/serti.png"
import Slider from "react-slick";


const Hone2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return (
        <section id="about">
            <div className="container">
                <a href="">Главная /<span> О школе</span></a>
                <div className="about">
                    <div className="about--title">
                        <h1>О нас</h1>
                        <p>Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке с целью <br/>дать
                            возможность каждому человеку, даже без опыта в технологиях, гарантированно <br/>освоить
                            IT-профессию.</p>
                        <p>Форма обучения - онлайн, с применением электронного обучения и дистанционных <br/>образовательных
                            технологий на образовательной платформе Moodle и прямые эфиры с <br/>преподавателем. 154
                            академических часа трудоёмкости учебной деятельности отведено <br/>практическим занятиям и
                            выполнению практических заданий.</p>
                        <div className="about--title__img">
                            <img src={about2} alt=""/>
                            <img src={about} alt=""/>
                        </div>
                    </div>

                </div>
                <div className="serti">
                    <h1>Сертификат</h1>
                    <h4>По окончании обучения выдается онлайн сертификат.</h4>
                    <img src={sertificate} alt=""/>
                </div>

                <div className="review">
                    <h1>Отзывы наших студентов</h1>
                </div>
                    <div className="slider">
                        <Slider {...settings}>
                            <div>  <div className="review--block">
                                <h1>Виктор Александарович</h1>
                                <p>С радостью оставляю положительной отзыв! Пройдя <br/>курс "UX/UI Designer с нуля" я с остался
                                    полностью <br/>доволен, что мой выбор пал именно на данную школу. <br/>Если вы выберите данную
                                    школу - вам обеспечена <br/>прокачка в выбранной вами области. Всячески <br/>рекомендую и
                                    благодарю!</p>
                                <h4>23.02.2022г</h4>
                            </div></div>
                            <div> <div className="review--block">
                                <h1>Виктор Александарович</h1>
                                <p>С радостью оставляю положительной отзыв! Пройдя <br/>курс "UX/UI Designer с нуля" я с остался
                                    полностью <br/>доволен, что мой выбор пал именно на данную школу. <br/>Если вы выберите данную
                                    школу - вам обеспечена <br/>прокачка в выбранной вами области. Всячески <br/>рекомендую и
                                    благодарю!</p>
                                <h4>23.02.2022г</h4>
                            </div></div>
                            <div> <div className="review--block">
                                <h1>Виктор Александарович</h1>
                                <p>С радостью оставляю положительной отзыв! Пройдя <br/>курс "UX/UI Designer с нуля" я с остался
                                    полностью <br/>доволен, что мой выбор пал именно на данную школу. <br/>Если вы выберите данную
                                    школу - вам обеспечена <br/>прокачка в выбранной вами области. Всячески <br/>рекомендую и
                                    благодарю!</p>
                                <h4>23.02.2022г</h4>
                            </div></div>
                            <div> <div className="review--block">
                                <h1>Виктор Александарович</h1>
                                <p>С радостью оставляю положительной отзыв! Пройдя <br/>курс "UX/UI Designer с нуля" я с остался
                                    полностью <br/>доволен, что мой выбор пал именно на данную школу. <br/>Если вы выберите данную
                                    школу - вам обеспечена <br/>прокачка в выбранной вами области. Всячески <br/>рекомендую и
                                    благодарю!</p>
                                <h4>23.02.2022г</h4>
                            </div></div>

                        </Slider>
                    </div>

                <div className='cool'>
                    <div className="cool--text">
                        <h1>Оставить заявку</h1>
                        <p>Заполните краткую форму с ключевым <br/>вопросами, и мы подготовимся
                            к разговору с <br/>вами </p>
                    </div>
                    <div className="cool--text__2">
                        <h5>ФИО*</h5>
                        <input type="text"/>
                        <h5>Номер телефон*</h5>
                        <input type="text"/>
                        <h5>Email*</h5>
                        <input type="text"/>
                        <button>Отправить</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hone2;