import React from 'react'
import './CounterBtn.css'

const CounterBtn = ({ count }) => {
    return (
        <div>
            <div className="pizza-card">
                <div className="pizza-img">
                    <img src={item.img} alt="" />
                </div>
                <h2 className='pizza-title'>{item.name}</h2>
                <p className='pizza-text'>{item.text}</p>
                <div className="pizza-info">
                    <button className='pizza-btn' onClick={toggle}>Выбрать</button>
                    <p className='pizza-price'>{item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CounterBtn
