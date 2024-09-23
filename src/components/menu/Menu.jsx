import React from 'react'
import './Menu.css'
import { menuData } from './data'


const Menu = () => {
  return (
    <div className='container'>
      <div className="menu" id='menu'>
        {
          menuData.map((item, index) =>
            <a href={item.href}  rel="noopener noreferrer"  key={index}>
               <div className="menu-box">
              <img src={item.img} alt="" />
              <h2 className='menu-text'>{item.name}</h2>
            </div>
            </a>
          )
        }
      </div>
    </div>
  )
}
export default Menu
