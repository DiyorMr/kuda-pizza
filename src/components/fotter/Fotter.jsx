import React from 'react'
import './Fotter.css'
import img from '../../img/Group 2.svg'
import tel from '../../img/Group 55.svg'
import map from '../../img/Group 1.svg'
import face from '../../img/Subtract.svg'
import inst from '../../img/Vector.svg'

const Fotter = () => {
    return (
        <div className='fotter'>
            <div className="container">
                <div className="fotter-info">
                    <div className="fotter-logo">
                        <a href='#menu'><img src={img}></img></a>
                        <h1 className='fotter-title'>Куда пицца</h1>
                    </div>
                    <div className="fotter-news">
                        <h1 className='fotter-title'>Куда пицца</h1>
                        <ul>
                            <a href='#'><li>О компании</li></a>
                            <a href='#'><li>Пользовательское соглашение</li></a>
                            <a href='#'><li>Условия гарантии</li></a>
                        </ul>
                    </div>
                    <div className="fotter-adress">
                        <h1 className='fotter-title'>Помощь</h1>
                        <ul>
                            <a href='#'><li>Ресторан</li></a>
                            <a href='#'><li>Контакты</li></a>
                            <a href='#'><li>Поддержка</li></a>
                            <a href='#'><li>Отследить заказ</li></a>
                        </ul>
                    </div>
                    <div className="fotter-contact">
                        <h1 className='fotter-title'>Контакты</h1>
                        <ul>
                            <li className="fotter-contacts">
                                <img src={tel} alt="" />
                                <a className='fotter-text' href="223-10-11">+7 (926) 223-10-11</a>
                            </li>
                            <li className="fotter-contacts">
                                <img src={map} alt="" />
                                <a className='fotter-text' href="#">Москва, ул. Юных Ленинцев, д.99</a>
                            </li>
                            <li className="fotter-contacts">
                                <img src={face} alt="" />
                                <a className='fotter-text' href="https://www.facebook.com/">Facebok</a>
                            </li>
                            <li className="fotter-contacts">
                                <img src={inst} alt="" />
                                <a className='fotter-text' href="https://www.facebook.com/">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <p>© Copyright 2021 — Куда Пицца</p>
            </div>
        </div>
    )
}
export default Fotter
