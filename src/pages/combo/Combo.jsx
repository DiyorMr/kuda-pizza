import React from 'react'
import './Combo.css'
import { comboData } from './data'
import Card from '../../components/card/Card'

const Combo = () => {
  const show = () => {
    const overDiv = document.getElementById('overlay')
    const boxDiv = document.querySelector('.combo-info-box')

    if (overDiv.classList.value === '') {
      overDiv.classList.add('overlay')
      boxDiv.classList.add('h-200')
    } else {
      overDiv.classList.remove('overlay')
      boxDiv.classList.remove('h-200')
    }
  }
  return (
    <>
      <div className='container' id='combo'>
        <h1>Комбо</h1>
        <div className="card-boxs">
          {
            comboData.map((item, index) => <Card key={index} item={item} />)
          }
        </div>
      </div>
      <div className="combo-info">
        <div className="container">
          <div className="combo-infos">
            <h1 className='adres-title'>Доставка пиццы в Москве</h1>
            <div className='combo-info-box h-200'>
              <div className='adres-text'>Захотелось чего-то вкусного и сытного? Желание простое и понятное,
                только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень
                просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть
                свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий
                легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать;
                быстрая и бесплатная доставка пиццы в течение 30 минут,
                чтобы вкусное и ароматное блюдо не успевало остыть.
                <h4>Как сделать заказ</h4>
                Доставка пиццы от Domino’s – это когда Вам не нужно никуда
                ехать или звонить,
                ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве
                не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо:
                выбрать понравившийся вариант и количество порций;
                положить желаемое в «Корзину»; не уходить далеко,
                так как вкусная пицца на заказ с доставкой уже мчится к
                Вам из ближайшей пиццерии Domino’s.
                И не забудьте оплатить заказ курьеру!
              </div>
              <div id='overlay' className='overlay'></div>
            </div>
            <h4 className='adres-title2 h-200' onClick={show}>Показать полностью</h4>
          </div>
        </div>
      </div>
    </>
  )
}
export default Combo
