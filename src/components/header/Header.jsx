import React, { useState } from 'react'
import './Header.css'
import map from '../../img/Group 1.svg'
import user from '../../img/Account.svg'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const Header = () => {
    const [modal, setModal] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className="header-info">
                        <div className="header-adress">
                            <div className="header-img">
                                <img src={map} alt="" />
                                <select className='select' >
                                    <option value="">
                                        Москва
                                    </option>
                                    <option value="">
                                        Томск
                                    </option>
                                    <option value="">
                                        Казань
                                    </option>
                                </select>
                            </div>
                            <a href='#' className='header-text'>Проверить адрес</a>
                            <a href='#' className='header-text'>Среднее время доставки*:00:24:19</a>
                        </div>
                        <div className="header-login">
                            <p className='header-text2'>Время работы: с 11:00 до 23:00</p>
                            <div className="header-img" onClick={toggle}>
                                <img className='user' src={user}></img>
                                <p className='header-text2'>Войти в аккаунт</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal size='lg' isOpen={modal} toggle={toggle} >
                <ModalHeader className='toggle' toggle={toggle}></ModalHeader>
                {
                    isAuth ?
                        <ModalBody>
                            <h1 className='modal-titles'>Вход в аккаунт</h1>
                            <p className='modal-text'>Сможете быстро оформлять заказы,
                                использовать бонусы</p>
                            <input className='input'  type="email" placeholder='электронная почта' />
                            <input className='input' type="password" placeholder='пароль' />
                            <button className='modal-btn'>Регистрация</button>
                            <p className='modal-text'>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и
                                пользовательским соглашением</p>
                            <div className="modal-login">
                                <p className='modal-submit'>Нужен аккаунт? </p>
                                <p className='modal2-btn' onClick={() => setIsAuth(false)}>Войти</p>
                            </div>
                        </ModalBody>
                        :
                        <ModalBody>
                            <h1 className='modal-titles'>Зарегистрировать аккаунт</h1>
                            <p className='modal-text'>Сможете быстро оформлять заказы,
                                использовать бонусы</p>
                            <input className='input' type="text" placeholder='имя' />
                            <input className='input' type="email" placeholder='электронная почта' />
                            <input className='input' type="tel" placeholder='+998' />
                            <input className='input' type="password" placeholder='пароль' />
                            <button className='modal-btn'>Регистрация</button>
                            <p className='modal-text'>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и
                                пользовательским соглашением</p>
                            <div className="modal-login">
                                <p className='modal-submit'>У вас уже есть аккаунт? </p>
                                <p className='modal2-btn' onClick={() => setIsAuth(true)}>Авторизоваться</p>
                            </div>
                        </ModalBody>
                }
            </Modal>
        </>
    )
}
export default Header
