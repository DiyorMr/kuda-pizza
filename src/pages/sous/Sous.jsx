import React from 'react'
import { sousData } from './data'
import Card from '../../components/card/Card'

const Sous = () => {
  return (
    <div className='container' id='sous'>
        <h1>Соусы</h1>
        <div className="card-boxs">
            {
                sousData.map((item,index)=><Card key={index} item={item}/>)
            }
        </div>
      
    </div>
  )
}

export default Sous
