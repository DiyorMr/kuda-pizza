import React from 'react'
import { desertData } from './data'
import Card from '../../components/card/Card'

const Desert = () => {
  return (
    <div className='container' id='desert'>
            <h1>Десерты</h1>
        <div className="card">
            <div className="card-boxs">
                {
                    desertData.map((item,index)=><Card key={index} item={item}/>)
                }
            </div>
        </div>
      
    </div>
  )
}

export default Desert
