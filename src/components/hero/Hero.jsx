import React from 'react'
import './Hero.css'
import search from '../../img/Group 1.svg'
import { heroCard } from './data'
const Hero = () => {
    return (
        <div className='container'>
            <div className="hero">
                {
                    heroCard.map((item, index) =>
                        <div className="hero-card" key={index}>
                            <img src={item.img} alt="" />
                        </div>
                    )
                }
            </div>
            <div className="map">
                <div className="map-title">
                    <h2 className='map-text'>Проверить адрес доставки</h2>
                </div>
                <div className="map-search">
                    <img src={search} alt="" />
                    <input className='map-input' type="text" placeholder='Адрес'/>
                </div>
                <div className="map-btn">
                    <button className='map-btns'>Проверить</button>
                </div>
            </div>
        </div>
    )
}
export default Hero
