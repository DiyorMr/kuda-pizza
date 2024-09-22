import React, { useEffect, useState } from 'react'
import './Card.css'
import { Modal, ModalBody, } from 'reactstrap';
import onion from '../../img/onion.svg'
import shampion from '../../img/shampion.svg'
import mazarella from '../../img/mazarella.svg'
import perets from '../../img/perets.svg'
import done from '../../img/Done.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { patternFormat, totalPrice } from '../../helpers';

const Card = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [cardData, setCardData] = useState([])

  useEffect(() => {
    setCardData([item])
  }, [item])

  const toggle = () => setModal(!modal);

  const addToBag = (card_data) => {
    var isProducts = localStorage.getItem('products')

    if (isProducts) {
      var storageProductList = JSON.parse(isProducts)
      var card_data_is_bug = storageProductList.filter(item => item.id === card_data.id)
      var filter_bug = storageProductList.filter(item => item.id !== card_data.id)

      var newList = card_data_is_bug.length
        ?
        [...filter_bug, { ...card_data_is_bug[0], count: card_data_is_bug[0].count + 1 }]
        :
        [...storageProductList, card_data]

      localStorage.setItem('products', JSON.stringify(newList))
      toast.success("The product has been added to the basket!")
      setModal(false)
    } else {
      localStorage.setItem('products', JSON.stringify([card_data]))
      toast.success("The product has been added to the basket!")
      setModal(false)
    }
  }


  const choose = (item) => {
    if (item?.id.startsWith('pizza')) {
      setCardData([item])
      toggle()
    }else{
      addToBag(item)
    }
  }

  return (
    <>
      {
        cardData.map((item, index) => (
          <div key={index}>
            <div className="pizza-card">
              <div className="pizza-img">
                <img src={item.img} alt="" />
              </div>
              <h2 className='pizza-title'>{item.name}</h2>
              <p className='pizza-text'>{item.text}</p>
              <div className="pizza-info">
                <button className='pizza-btn' onClick={() => choose(item)}>Выбрать</button>
                <p className='pizza-price'>{patternFormat(totalPrice(item))} ₽</p>
              </div>
            </div>
            <Modal size='lg' isOpen={modal} toggle={toggle}>
              <ModalBody>
                <div className="modal-pizza">
                  <div className="img">
                    <img className='m-img' src={item.img} alt="" />
                  </div>
                  <div className="modal-add">
                    <h1 className='modal-title'>{item.name}</h1>
                    <div className="modal-button">
                      <button
                        className={item.quality === 'Traditional' ? 'modal-btn-activ' : 'modal-btn-active'}
                        onClick={() => setCardData([{ ...item, quality: 'Traditional' }])}>
                        Традиционное
                      </button>
                      <button
                        className={item.quality === 'Thin' ? 'modal-btn-activ' : 'modal-btn-active'}
                        onClick={() => setCardData([{ ...item, quality: 'Thin' }])}>Тонкое</button>
                    </div>
                    <div className='modal-btn-size'>
                      <button
                        className={item.size === '20' ? 'modal-btn-activ' : 'modal-btn-active'}
                        onClick={() => setCardData([{ ...item, size: '20' }])}>
                        20 см
                      </button>
                      <button
                        className={item.size === '28' ? 'modal-btn-activ' : 'modal-btn-active'}
                        onClick={() => setCardData([{ ...item, size: '28' }])}>
                        28  см
                      </button>
                      <button
                        className={item.size === '33' ? 'modal-btn-activ' : 'modal-btn-active'}
                        onClick={() => setCardData([{ ...item, size: '33' }])}>
                        33 см
                      </button>
                    </div>
                    <h1 className='modal-title'>{item.name}</h1>
                    <div className="m-photo">
                      <div className={item.isMonzarella ? 'border-warning m-photo-item' : "m-photo-item"} onClick={() => setCardData([{ ...item, isMonzarella: !item.isMonzarella }])}>
                        <img src={mazarella} alt="mazarella" />
                        <img src={done} alt="done" />
                      </div>
                      <div className={item.isChampignons ? 'border-warning m-photo-item' : "m-photo-item"} onClick={() => setCardData([{ ...item, isChampignons: !item.isChampignons }])}>
                        <img src={shampion} alt="" />
                        <img src={done} alt="done" />
                      </div>
                      <div className={item.isSweet ? 'border-warning m-photo-item' : "m-photo-item"} onClick={() => setCardData([{ ...item, isSweet: !item.isSweet }])}>
                        <img src={perets} alt="" />
                        <img src={done} alt="done" />
                      </div>
                      <div className={item.isOnion ? 'border-warning m-photo-item' : "m-photo-item"} onClick={() => setCardData([{ ...item, isOnion: !item.isOnion }])}>
                        <img src={onion} alt="" />
                        <img src={done} alt="done" />
                      </div>
                    </div>
                    <div className="m-footer">
                      <div className="m-left">
                        <p className='m-price'>Итого: {patternFormat(totalPrice(item))} ₽<span className='m-weight'>/400 г</span></p>
                      </div>
                      <div className="m-right">
                        <button className='m-add' onClick={() => addToBag(item)}>Добавить</button>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </div>
        ))
      }
    </>
  )
}
export default Card
