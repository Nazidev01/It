import React from 'react';
import ok from "../../../img/gues.svg"

const Follow = () => {
    return (
        <section id="follow">
            <div className="container">
                <div className="follow">
                    <div className="follow--block">
                        <div>
                            <h1>Подпишитесь сейчас за 19,00 $ / мес</h1>
                            <p>И получите доступ к материалам и кейсам, а также к новым <br/>мастер-классам </p>
                        </div>
                        <div className="follow--block__btn">
                            <div>
                                <button>Оформить подписку</button>
                            </div>
                            <a href="src/components/school/Follow">Подробнее о пакетах </a>

                        </div>


                    </div>
                    <div className="follow--title">
                        <div>
                            <h1>Остались <br/>вопросы?</h1>
                            <img src={ok} alt=""/>
                        </div>
                        <div className="follow--title__acc">
                            <details>
                                <summary>Что такое зарезервированные слова в программировании?</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Deserunt quibusdam
                                    sunt ut! Alias <br/>assumenda autem consectetur, consequatur ducimus <br/>eum
                                    expedita magnam nam
                                    obcaecati quaerat quas quod soluta
                                    sunt tempore veritatis?</p>
                            </details>
                            <details>
                                <summary>Могу ли я отказаться от автопродления подписки</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Deserunt quibusdam
                                    sunt ut! Alias <br/>assumenda autem consectetur, consequatur ducimus <br/>eum
                                    expedita magnam nam
                                    obcaecati quaerat quas quod <br/>soluta
                                    sunt tempore veritatis?</p>
                            </details>
                            <details>
                                <summary>Могу ли я вернуть деньги</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Deserunt quibusdam
                                    sunt ut! Alias <br/>assumenda autem consectetur, consequatur ducimus <br/>eum
                                    expedita magnam nam
                                    obcaecati quaerat quas quod <br/>soluta
                                    sunt tempore veritatis?</p>
                            </details>
                            <details>
                                <summary>Какие направление в IT самые актуальные</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Deserunt quibusdam
                                    sunt ut! Alias <br/>assumenda autem consectetur, consequatur ducimus <br/>eum
                                    expedita magnam nam
                                    obcaecati quaerat quas quod <br/>soluta
                                    sunt tempore veritatis?</p>
                            </details>
                            <details>
                                <summary>Нужно ли учить другой язык программирования, <br/>перед изучением языка С++?</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Deserunt quibusdam
                                    sunt ut! Alias <br/>assumenda autem consectetur, consequatur ducimus <br/>eum
                                    expedita magnam nam
                                    obcaecati quaerat quas quod <br/>soluta
                                    sunt tempore veritatis?</p>
                            </details>
                            <details>
                                <summary>Платформа обнавляется?</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Deserunt quibusdam
                                    sunt ut! Alias <br/>assumenda autem consectetur, consequatur ducimus <br/>eum
                                    expedita magnam nam
                                    obcaecati quaerat quas quod <br/>soluta
                                    sunt tempore veritatis?</p>
                            </details>
                            <details>
                                <summary>Как я могу получить доступ ка всем курсом</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Deserunt quibusdam
                                    sunt ut! Alias <br/>assumenda autem consectetur, consequatur ducimus <br/>eum
                                    expedita magnam nam
                                    obcaecati quaerat quas quod <br/>soluta
                                    sunt tempore veritatis?</p>
                            </details>
                        </div>
                    </div>
                    <div className='follow--text'>
                        <div>
                            <h1>Оставить заявку</h1>
                            <p>Заполните краткую форму с ключевым <br/>вопросами, и мы подготовимся
                                к разговору с <br/>вами </p>
                        </div>
                        <div className="follow--text__2">
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
            </div>
        </section>
    );
};
export default Follow;