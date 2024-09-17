import React from 'react'
import { pizzaData } from './data'
import Card from '../../components/card/Card'

const Pizza = () => {
    return (
        <div className='container' id='pizza'>
            <h1>Пицца</h1>
            <div className="card">
                <div className="card-boxs">
                    {
                        pizzaData.map((item, index) => <Card key={index} item={item} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default Pizza
