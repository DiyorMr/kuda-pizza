import React from 'react'
import { snackData } from './data'
import Card from '../../components/card/Card'

const Snack = () => {
  return (
    <div className='container' id='snack'>
        <h1>Закуски</h1>
      <div className="card" >
        <div className="card-boxs" >
          {
            snackData.map((item, index) => <Card key={index} item={item} />)
          }
        </div>
      </div>

    </div>
  )
}

export default Snack
