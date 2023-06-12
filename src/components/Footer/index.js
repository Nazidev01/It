import React from 'react';
import logo from "../../img/logo.svg"
import {Link} from "react-router-dom";
import {AiOutlineInstagram, AiOutlineYoutube} from "react-icons/ai";
import {CiFacebook} from "react-icons/ci";
import {LuTwitter} from "react-icons/lu";
import {TbBrandTelegram} from "react-icons/tb";
import {IoLogoTiktok} from "react-icons/io5";
import {BsTelephone} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import {HiOutlineLocationMarker} from "react-icons/hi";


const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--foot1">
                        <img src={logo} alt=""/>
                        <div className="footer--foot1__lan">
                            <h3>KG</h3>
                            <h3>RU</h3>
                        </div>
                    </div>
                    <div className="footer--foot2">
                        <h4>Быстрые ссылки</h4>
                        <div className="footer--foot2__link">
                            <Link to={"/"}>О школе</Link>
                            <Link to={""}>Наши курсы</Link>
                            <Link to={""}>О нас</Link>
                        </div>

                    </div>
                    <div className="footer--foot3">
                        <h4>Социальные сети</h4>
                        <div className="footer--foot3__icon">
                            <div>
                                <AiOutlineInstagram className="footer--foot3__icon--1"/>
                                <AiOutlineYoutube className="footer--foot3__icon--1"/>
                                <CiFacebook className="footer--foot3__icon--1"/>
                            </div>
                            <div>
                                <LuTwitter className="footer--foot3__icon--1"/>
                                <IoLogoTiktok className="footer--foot3__icon--1"/>
                                <TbBrandTelegram className="footer--foot3__icon--1"/>
                            </div>
                        </div>

                    </div>
                    <div className="footer--foot4">
                        <h4>Контакты</h4>
                        <div className="footer--foot4__text">
                            <p><BsTelephone className="footer--foot4__icon2"/>+996 559 - 69 - 26 - 26</p>
                            <p><FiMail className="footer--foot4__icon2"/>@motionwebteam@gmail.com</p>
                        </div>

                    </div>
                    <div className="footer--foot5">
                        <h4>Адреса</h4>
                        <p>< HiOutlineLocationMarker/> Турусбекова 109 / 3</p>
                        <h6>Идентификационный <br/>код: 1234567890</h6>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;