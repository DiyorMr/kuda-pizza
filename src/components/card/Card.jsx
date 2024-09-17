import React, { useEffect, useState } from 'react'
import './Card.css'
import { Modal, ModalBody, } from 'reactstrap';
import img from '../../img/Rectangle 4.svg'
import photo from '../../img/Group 84.svg'



const Card = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [cardData, setCardData] = useState({})

  useEffect(() => {
    setCardData(item)
  }, [item])

  const toggle = () => setModal(!modal);

  const addToBag = (card_data) => {
    var isProducts = localStorage.getItem('products')

    if (isProducts) {
      var storageProductList = JSON.parse(isProducts)
      var newList = [...storageProductList, card_data]
      localStorage.setItem('products', JSON.stringify(newList))
    } else {
      localStorage.setItem('products', JSON.stringify([card_data]))
    }

  }
  return (
    <>
      <div className="pizza-card">
        <div className="pizza-img">
          <img src={cardData.img} alt="" />
        </div>
        <h2 className='pizza-title'>{cardData.name}</h2>
        <p className='pizza-text'>{cardData.text}</p>
        <div className="pizza-info">
          <button className='pizza-btn' onClick={toggle}>Выбрать</button>
          <p className='pizza-price'>{cardData.price}</p>
        </div>
      </div>
      <Modal size='lg' isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div className="modal-pizza">
            <div className="img">
              <img className='m-img' src={cardData.img} alt="" />
            </div>
            <div className="modal-add">
              <h1 className='modal-title'>{cardData.name}</h1>
              <div className="modal-button">
                <button
                  className={cardData.quality === 'Traditional' ? 'modal-btn-activ' : 'modal-btn-active'}
                  onClick={() => setCardData({ ...cardData, quality: 'Traditional' })}>
                  Традиционное
                </button>
                <button
                  className={cardData.quality === 'Thin' ? 'modal-btn-activ' : 'modal-btn-active'}
                  onClick={() => setCardData({ ...cardData, quality: 'Thin' })}>Тонкое</button>
              </div>
              <div className='modal-btn-size'>
                <button
                  className={cardData.size === '20' ? 'modal-btn-activ' : 'modal-btn-active'}
                  onClick={() => setCardData({ ...cardData, size: '20' })}>
                  20 см
                </button>
                <button
                  className={cardData.size === '28' ? 'modal-btn-activ' : 'modal-btn-active'}
                  onClick={() => setCardData({ ...cardData, size: '28' })}>
                  28  см
                </button>
                <button
                  className={cardData.size === '33' ? 'modal-btn-activ' : 'modal-btn-active'}
                  onClick={() => setCardData({ ...cardData, size: '33' })}>
                  33 см
                </button>
              </div>
              <h1 className='modal-title'>{cardData.name}</h1>
              <div className="m-photo">
                <img src={photo} alt="" />
                <img src={photo} alt="" />
                <img src={photo} alt="" />
                <img src={photo} alt="" />
              </div>
              <div className="m-footer">
                <div className="m-left">
                  <p className='m-price'>Итого: {cardData.price}<span className='m-weight'>400 г</span></p>
                </div>
                <div className="m-right">
                  <button className='m-add' onClick={() => addToBag(cardData)}>Добавить</button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Card
