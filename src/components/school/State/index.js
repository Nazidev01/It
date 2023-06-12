import React from 'react';
import coding from "../../../img/coding.png"
import {IoReaderSharp} from "react-icons/io5";

const State = () => {
    return (
        <section id="state">
            <div className="container">
                <h1 className="h1">Последние статьи</h1>
                <div className="state">
                    <div className="state--block">
                        <img src={coding} alt=""/>
                        <h6>Статьи</h6>
                        <p>Мы подготовили подборку самых <br/>популярных курсов по направлению <br/>Java в IBS Training
                            Center. </p>
                        <IoReaderSharp className="state--block__icon"/> <a href="src/components/school/State">Читать</a><span>01.02.2022</span>
                    </div>
                    <div className="state--block">
                        <img src={coding} alt=""/>
                        <h6>Статьи</h6>
                        <p>Мы подготовили подборку самых <br/>популярных курсов по направлению <br/>Java в IBS Training
                            Center. </p>
                        <IoReaderSharp className="state--block__icon"/> <a href="src/components/school/State">Читать</a><span>01.02.2022</span>
                    </div>
                    <div className="state--block">
                        <img src={coding} alt=""/>
                        <h6>Статьи</h6>
                        <p>Мы подготовили подборку самых <br/>популярных курсов по направлению <br/>Java в IBS Training
                            Center. </p>
                        <IoReaderSharp className="state--block__icon"/> <a href="src/components/school/State">Читать</a><span>01.02.2022</span>
                    </div>


                </div>
                <div className="state">
                    <div className="state--block">
                        <img src={coding} alt=""/>
                        <h6>Статьи</h6>
                        <p>Мы подготовили подборку самых <br/>популярных курсов по направлению <br/>Java в IBS Training
                            Center. </p>
                        <IoReaderSharp className="state--block__icon"/> <a href="src/components/school/State">Читать</a><span>01.02.2022</span>
                    </div>
                    <div className="state--block">
                        <img src={coding} alt=""/>
                        <h6>Статьи</h6>
                        <p>Мы подготовили подборку самых <br/>популярных курсов по направлению <br/>Java в IBS Training
                            Center. </p>
                        <IoReaderSharp className="state--block__icon"/> <a href="src/components/school/State">Читать</a><span>01.02.2022</span>
                    </div>
                    <div className="state--block">
                        <img src={coding} alt=""/>
                        <h6>Статьи</h6>
                        <p>Мы подготовили подборку самых <br/>популярных курсов по направлению <br/>Java в IBS Training
                            Center. </p>
                        <IoReaderSharp className="state--block__icon"/> <a href="src/components/school/State">Читать</a><span>01.02.2022</span>
                    </div>


                </div>
            </div>
            <button className="btn">Показать больше</button>
        </section>
    );
};

export default State;