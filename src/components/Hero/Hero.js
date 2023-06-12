import React from 'react';
import about from "../../img/about1.svg";
import {BsArrowRight} from "react-icons/bs";
import foc from "../../img/solut.svg"
import foc1 from "../../img/solut2.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return (
        <section id="hero">
            <div className="container">
                <a href="">Главная /<span> О школе</span></a>
                <div className="hero">
                    <div>
                        <h1>О нашей школе:</h1>
                        <p>Наша платформа — это интенсивная программа <br/>обучения для тех, кто хочет освоить
                            востребованную <br/>профессию, войти в IT и зарабатывать больше.</p>
                        <h1>Наша миссия:</h1>
                        <p>Сформировать интерес к современным технологиям <br/>и помочь школьнику определиться с
                            выбором <br/>будущей
                            специальности.</p>
                    </div>
                    <img src={about} alt=""/>
                </div>

            <div>
                <h1 className="h1">Курсы</h1>
                <div className="hero2">
                    <div className="hero2--block">
                        <h1>Frontend-разработчик</h1>
                        <p>Мастер создания сайтов. Умеет <br/>делать их красивыми, <br/>интерактивными, с большим <br/>функционалом.
                            Профессия отлично <br/>подойдет тем, кто хочет фрилансить <br/>и постоянно разрабатывать
                            новые <br/>проекты</p>
                        <h2>Подробнее<BsArrowRight className="block--icon"/></h2>
                    </div>
                    <div className="hero2--block">
                        <h1>Backend-разработчик</h1>
                        <p>Специалист, который отвечает за <br/>построение логики для воплощения <br/>любой идеи. Он
                            собирает фундамент <br/>и опорную систему для проекта - от <br/>простого сайта для магазина
                            одежды <br/>до сложных вычислительных систем <br/>нейронных сетей.</p>
                        <h2>Подробнее<BsArrowRight className="block--icon"/></h2>
                    </div>
                    <div className="hero2--block">
                        <h1>UX / UI Дизайнер</h1>
                        <p>Креативный специалист, который <br/>придумывает дизайн и интерфейс <br/>продукта. Специалист
                            UX/UI отвечает <br/>за подбор форм, цветов, <br/>Функциональности дизайна и прочих <br/>важных
                            параметров для комфорьного <br/>использования продукта.</p>
                        <h2>Подробнее<BsArrowRight className="block--icon"/></h2>
                    </div>
                </div>
                <button className="btn">Все курсы</button>
            </div>
            <div className="java">
                <h1>Мастер-классы</h1>
                <div className="java--block">
                    <div>
                        <h3>Реактивное программирование на Java: как, зачем и стоит ли? </h3>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность
                            этого <br/>относительно нового подхода и почему сейчас он в тренде, рассказал на конференции
                            РИТ++ ...</p>
                    </div>

                </div>
                <div className="java--block">
                    <div>
                        <h3>Реактивное программирование на Java: как, зачем и стоит ли? </h3>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность
                            этого <br/>относительно нового подхода и почему сейчас он в тренде, рассказал на конференции
                            РИТ++ ...</p>
                    </div>

                </div>
                <div className="java--block">
                    <div>
                        <h3>Реактивное программирование на Java: как, зачем и стоит ли? </h3>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность
                            этого <br/>относительно нового подхода и почему сейчас он в тренде, рассказал на конференции
                            РИТ++ ...</p>
                    </div>

                </div>
                <button>Все мастер классы</button>
            </div>
            <div className="nivea">
                <h1>Уровень пакетов</h1>
                <p>Списания будут автоматическими. Вы всегда можете отменить подписку в <br/>Вашем личном кабинете и
                    больше списаний не будет</p>
                <div className="nivea--block">
                    <div className="nivea--block__title">
                        <h4>Месяц +</h4>
                        <h3>Доступны: Все статьи</h3>
                        <h2>105,00 $</h2>
                        <h6>Ежемесячно</h6>
                        <div className="nivea--block__title--btn">
                            <button className="nivea--block__title--btn__1">Оформить подписку</button>
                            <button className="nivea--block__title--btn__2">Подробнее</button>
                        </div>
                    </div>
                    <div className="nivea--block__title">
                        <h4>Месяц +</h4>
                        <h3>Доступны: Все статьи</h3>
                        <h2>105,00 $</h2>
                        <h6>Ежемесячно</h6>
                        <div className="nivea--block__title--btn">
                            <button className="nivea--block__title--btn__1">Оформить подписку</button>
                            <button className="nivea--block__title--btn__2">Подробнее</button>
                        </div>
                    </div>
                    <div className="nivea--block__title">
                        <h4>Месяц +</h4>
                        <h3>Доступны: Все статьи</h3>
                        <h2>105,00 $</h2>
                        <h6>Ежемесячно</h6>
                        <div className="nivea--block__title--btn">
                            <button className="nivea--block__title--btn__1">Оформить подписку</button>
                            <button className="nivea--block__title--btn__2">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>

                <div className="slider">
                    <Slider {...settings}>
                        <div>  <div className="slid--block">
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя <br/>курс "UX/UI Designer с нуля" я с остался
                                полностью <br/>доволен, что мой выбор пал именно на данную школу. <br/>Если вы выберите данную
                                школу - вам обеспечена <br/>прокачка в выбранной вами области. Всячески <br/>рекомендую и
                                благодарю!</p>
                            <h4>23.02.2022г</h4>
                        </div></div>
                        <div> <div className="slid--block">
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя <br/>курс "UX/UI Designer с нуля" я с остался
                                полностью <br/>доволен, что мой выбор пал именно на данную школу. <br/>Если вы выберите данную
                                школу - вам обеспечена <br/>прокачка в выбранной вами области. Всячески <br/>рекомендую и
                                благодарю!</p>
                            <h4>23.02.2022г</h4>
                        </div></div>
                        <div> <div className="slid--block">
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя <br/>курс "UX/UI Designer с нуля" я с остался
                                полностью <br/>доволен, что мой выбор пал именно на данную школу. <br/>Если вы выберите данную
                                школу - вам обеспечена <br/>прокачка в выбранной вами области. Всячески <br/>рекомендую и
                                благодарю!</p>
                            <h4>23.02.2022г</h4>
                        </div></div>
                        <div> <div className="slid--block">
                            <h1>Виктор Александарович</h1>
                            <p>С радостью оставляю положительной отзыв! Пройдя <br/>курс "UX/UI Designer с нуля" я с остался
                                полностью <br/>доволен, что мой выбор пал именно на данную школу. <br/>Если вы выберите данную
                                школу - вам обеспечена <br/>прокачка в выбранной вами области. Всячески <br/>рекомендую и
                                благодарю!</p>
                            <h4>23.02.2022г</h4>
                        </div></div>




                    </Slider>
                </div>

            <div className='leave'>
                <div className="leave--text">
                    <h1>Оставить заявку</h1>
                    <p>Заполните краткую форму с ключевым <br/>вопросами, и мы подготовимся
                        к разговору с <br/>вами </p>
                </div>
                <div className="leave--text__2">
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

export default Hero;