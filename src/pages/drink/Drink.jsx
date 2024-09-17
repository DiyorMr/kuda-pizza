import React from 'react'
import { drinkData } from './data'
import Card from '../../components/card/Card'

const Drink = () => {
    return (
        <div className='container' id='drink'>
            <h1>Напитки</h1>
            <div className="card-boxs" >
                {
                    drinkData.map((item, index) => <Card key={index} item={item} />)
                }
            </div>
        </div>
    )
}

export default Drink
