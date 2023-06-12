import React from 'react';
import logo from "../../img/logo.svg"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div className="header--nav">
                        <img src={logo} alt=""/>
                        <div className="header--nav__link">
                            <Link to={"/school"}> Главное</Link>
                            <Link to={"/"}>О школе</Link>
                            <Link to={"/we"}>Наши курсы</Link>
                        </div>
                    </div>
                    <div className="header--nav2">
                        <Link to={""}>Войти</Link>
                        <button>Подписаться</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;