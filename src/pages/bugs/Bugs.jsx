import React, { useEffect, useState } from 'react'
import './Bugs.css'
import img from '../../img/pizza-card.svg'
import image from '../../img/Send.svg'
import photo from '../../img/chips.svg'
import photos from '../../img/barbaqu.svg'
import sous from '../../img/Rectangle 4 (5).svg'
import big from '../../img/cart4.svg'

import { bugTotalPrice, decrement, increment, patternFormat, totalPrice } from '../../helpers'

const Bugs = () => {
  const [btnActive, setBtnActive] = useState('Delivery')
  const [products, setProducts] = useState([])

  useEffect(() => {
    var productList = localStorage.getItem('products')
    setProducts(JSON.parse(productList));
  })
  return (
    <div className='container'>
      <div className="bug">
        <h1>Ваш заказ</h1>
        {products?.length ?
          products?.sort((a, b) => a.id - b.id).map((item, index) =>
            <div className="bugs-modal" key={index}>
              <div className="bugs-modal-left">
                <div className="bug-img">
                  <img className='bugs-images' src={img} alt="" />
                </div>
                <div className="bug-title">
                  <h1>{item.name}</h1>
                  <p>{item.quality}, {item.size}cм</p>
                </div>
              </div>
              <div className="bugs-modal-right">
                <div className="bugs-modal-btn">
                  <div className='bugs-btns-korzinka'>
                    <button className='bugs-buttons' onClick={() => decrement(item, products)}>
                      -
                    </button>
                    <p className='count'>{item.count}</p>
                    <button className='bugs-buttons' onClick={() => increment(item, products)}>
                      +
                    </button>
                  </div>
                  <div className="bugs-modal-price">
                    <p className='bug-price'>{patternFormat(totalPrice(item))} ₽</p>
                  </div>
                </div>
              </div>
            </div>
          ) : <div className="drawer-info">
            <img className='big' src={big} alt="" />
            <p className='big-text'>Ой, ваша корзина пуста! :</p>
          </div>
        }
        <div className="code">
          <div className="code-left">
            <input className='left-input' type="text" placeholder='Промокод' />
            <div className="send">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="code-right">
            <h2 className='code-right-price'>Итого: {patternFormat(bugTotalPrice())} ₽</h2>
          </div>
        </div>
        <div className="korzinka">
          <h1>Добавить к заказу?</h1>
          <div className="carousel-cards">
            <div className="carousel-card">
              <img className='photo' src={photo} alt="First slide" />
              <h2 className='carousel-title'>Картофель из печи</h2>
              <p className='carousel-text'>Порция 95 г</p>
              <button className='carousel-btn'>179 ₽</button>
            </div>
            <div className="carousel-card">
              <img className='photo' src={photos} alt="First slide" />
              <h2 className='carousel-title'>Филадельфия крем-брюле</h2>
              <p className='carousel-text'>Порция 95 г</p>
              <button className='carousel-btn'>500 ₽</button>
            </div>
            <div className="carousel-card">
              <img className='photo' src={photo} alt="First slide" />
              <h2 className='carousel-title'>Картофель из печи</h2>
              <p className='carousel-text'>Порция 95 г</p>
              <button className='carousel-btn'>500 ₽</button>
            </div>
            <div className="carousel-card">
              <img className='photo' src={photos} alt="First slide" />
              <h2 className='carousel-title'>Картофель из печи</h2>
              <p className='carousel-text'>Порция 95 г</p>
              <button className='carousel-btn'>205 ₽</button>
            </div>

          </div>
        </div>
        <div className="korzinka">
          <h1>Соусы</h1>
          <div className="carousel-cards">
            <div className="carousel-card">
              <img className='photo' src={sous} alt="First slide" />
              <h2 className='carousel-title'>Сырный соус</h2>
              <button className='carousel-btn'>39 ₽</button>
            </div>
            <div className="carousel-card">
              <img className='photo' src={sous} alt="First slide" />
              <h2 className='carousel-title'>Барбфекю</h2>
              <button className='carousel-btn'>39 ₽</button>
            </div>
            <div className="carousel-card">
              <img className='photo' src={sous} alt="First slide" />
              <h2 className='carousel-title'>Ранч</h2>
              <button className='carousel-btn'>39 ₽</button>
            </div>
            <div className="carousel-card">
              <img className='photo' src={sous} alt="First slide" />
              <h2 className='carousel-title'>Сгущёнка</h2>
              <button className='carousel-btn'>39 ₽</button>
            </div>
          </div>
        </div>
        <div className="about">
          <h2>О вас</h2>
          <div className="about-input-card">
            <div className="about-input">
              <p>Имя*</p>
              <input type="text" placeholder='Алексей' />
            </div>
            <div className="about-input">
              <p>Номер телефона*</p>
              <input type="text" placeholder='+7' />
            </div>
            <div className="about-input">
              <p>Почта*</p>
              <input type="text" placeholder='mail@gmail.com' />
            </div>
          </div>

        </div>
        <div className="delivery">
          <div className="delivery-info">
            <div className="delivery-info-left">
              <h2>Доставка</h2>
            </div>
            <div className="delivery-info-right">
              <button className={btnActive === 'Delivery' ? 'delivery-btn-active' : 'delivery-btn'} onClick={() => setBtnActive('Delivery')}>Доставка</button>
              <button className={btnActive === 'Pickup' ? 'delivery-btn-active' : 'delivery-btn'} onClick={() => setBtnActive('Pickup')}>Самовывоз</button>
            </div>
          </div>
          {
            btnActive === 'Delivery'
              ?
              <>
                <div className="delivery-adress">
                  <p>Улица*</p>
                  <input type="text" placeholder='Пушкина' />
                </div>
                <div className="delivery-boxs">
                  <div className="delivery-home">
                    <p>Дом</p>
                    <input type="text" placeholder='1а' />
                  </div>
                  <div className="delivery-home">
                    <p>Подъезд</p>
                    <input type="text" placeholder='1' />
                  </div>
                  <div className="delivery-home">
                    <p>Этаж</p>
                    <input type="text" placeholder='2' />
                  </div>
                  <div className="delivery-home">
                    <p>Квартира</p>
                    <input type="text" placeholder='3' />
                  </div>
                  <div className="delivery-home">
                    <p>Домофон</p>
                    <input type="text" placeholder='0000' />
                  </div>
                </div>
              </>
              :
              <>
               <div className="delivery-adress">
                  <p>Ресторан*</p>
                  <input type="text" placeholder='Выберите ресторан' />
                </div>
              </>
          }
          <div className="delivery-select">
            <p>Когда выполнить заказ?</p>
            <div className="select-radio">
              <input type="radio" id="asap" name="vehicle1" />
              <label for="asap"> Как можно скорее</label>
              <input type="radio" id="by_time" name="vehicle1" />
              <label for="by_time"> По времени</label>
            </div>
          </div>
          <div className="delivery-select2">
            <p>Оплата</p>
            <div className="select-radio">
              <input type="radio" id="Cash" name="vehicle2" />
              <label for="Cash"> Наличными</label>
              <input type="radio" id="by_cart" name="vehicle2" />
              <label for="by_cart"> Картой</label>
              <input type="radio" id="apple_pay" name="vehicle2" />
              <label for="apple_pay"> Apple Pay</label>
            </div>
          </div>
          <div className="delivery-select2">
            <p>Сдача</p>
            <div className="select-radio">
              <input type="radio" id="no_change" name="vehicle3" />
              <label for="no_change"> Без сдачи</label>
              <input type="radio" id="surrender" name="vehicle3" />
              <label for="surrender"> Сдача </label>
              <div className="change-card">
                <input type="text" placeholder='0' />
              </div>
            </div>
          </div>
          <div className="delivery-select3">
            <p>Комментарий</p>
            <div className="change-card2">
              <input type="text" placeholder='Есть уточнения?' />
            </div>
          </div>
          <div className="delivery-fotter">
            <div className="delivery-fotter-info-price">
              <p className='bug-price'>{patternFormat(bugTotalPrice(products))} ₽</p>
            </div>
            <div className="delivery-fotter-info-btn">
              <button> Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bugs
