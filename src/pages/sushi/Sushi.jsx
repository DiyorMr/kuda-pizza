import React from 'react'
import { sushiData } from './data'
import Card from '../../components/card/Card'

const Sushi = () => {
    return (
        <div className='container' id='sushi'>
                <h1>Суши</h1>
            <div className="card" >
                <div className="card-boxs">
                    {
                        sushiData.map((item, index) =><Card key={index} item={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Sushi
