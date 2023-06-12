import React from 'react';
import img from "../../../img/img.svg"
import logo1 from "../../../img/images (1) 2.png"
import logo2 from "../../../img/images (2) 1.png"
import logo3 from "../../../img/tools 3.png"
import logo4 from "../../../img/lamp 4.png"

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="home">
                    <div className="home--title">
                        <h1>IT образовательная платформа </h1>
                        <p>Наша образовательная платформа вам <br/>даст необходимые практические <br/>знания для
                            адаптации в IT-сфере.</p>
                    </div>
                    <div>
                        <img className="home--img1" src={img} alt=""/>
                        <img className="home--logo1" src={logo1} alt=""/>
                        <img className="home--logo2" src={logo2} alt=""/>
                        <img className="home--logo3" src={logo3} alt=""/>
                        <img className="home--logo4" src={logo4} alt=""/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;