import './Navbar.css'
import logo from '../../img/Group 2.svg'
import shop from '../../img/Shopping bag.svg'
import close from '../../img/trash.svg'
import big from '../../img/cart4.svg'


import { menuData } from '../menu/data'
import { Drawer } from 'antd'
import { useEffect, useState } from 'react'
import { bugTotalPrice, decrement, increment, patternFormat, totalPrice } from '../../helpers'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([])
    const showDrawer = () => setOpen(true)
    const onClose = () => setOpen(false)


    useEffect(() => {
        var productList = localStorage.getItem('products')
        setProducts(JSON.parse(productList));
    })

    const clearAll = () => {
        localStorage.clear()
    }

    return (
        <div className='navbar' id='navbar'>
            <div className="container">
                <div className="navbar-menu ">
                    <Link className="navbar-img" to='/'>
                        <img src={logo} />
                        <p className='navbar-text'>Куда пицца</p>
                    </Link>
                    <ul className='navbar-menu-list' id="navbar-menu-list">
                        {
                            menuData.map(item => <a key={item.href} href={item.href}>{item.name}</a>)
                        }
                    </ul>
                    <div className="navbar-img-btn" onClick={showDrawer} >
                        <img className='shop' src={shop} alt="" />
                        <p className='navbar-text-btn'>{patternFormat(bugTotalPrice())} ₽</p>
                    </div>
                </div>
            </div>
            <Drawer className='drawer'
                title="Ваш заказ"
                placement={'right'}
                closable={false}
                onClose={onClose}
                open={open}
                key={'right'}
            >
                <div className="drawer-img" >
                    <img className='close' src={close} alt="" onClick={clearAll} />
                </div>
                <div className='bugs-box'>
                    {
                        products?.length ?
                            products.sort((a, b) => a.id - b.id).map((item, index) =>
                                <div key={index}>
                                    <div className='bugs-add'>
                                        <div className="bugs-img">
                                            <img className='images' src={item.img} alt="" />
                                        </div>
                                        <div className="bugs-info">
                                            <h4 className='bugs-title'>{item.name}</h4>
                                            <p className='bugs-text'>{item.text}</p>
                                            <div className="bugs-btns">
                                                <div className='bugs-btn'>
                                                    <button className='bugs-button' onClick={() => decrement(item, products)}>
                                                        -
                                                    </button>
                                                    <p className='count'>{item.count}</p>
                                                    <button className='bugs-button' onClick={() => increment(item, products)}>
                                                        +
                                                    </button>
                                                </div>
                                                <div className="bugs-prices">
                                                    <p className='bugs-price'>{patternFormat(totalPrice(item))} ₽</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            <div className="drawer-info">
                                <img className='big' width='100px' height='100px' src={big} alt="" />
                                <p className='big-text'>Ой, ваша корзина пуста! :</p>
                            </div>
                    }
                </div>
                <hr />
                <div className="drawer-fotter">
                    <p className='drawer-price'>Итого: {patternFormat(bugTotalPrice())} ₽</p>
                    <button className='drawer-btn' onClick={() => { navigate('/bugs'); setOpen(false) }}>Оформить заказ</button>
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar
