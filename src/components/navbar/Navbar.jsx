import './Navbar.css'
import logo from '../../img/Group 2.svg'
import shop from '../../img/Shopping bag.svg'
import close from '../../img/x-lg.svg'
import big from '../../img/cart4.svg'


import { menuData } from '../menu/data'
import { Drawer } from 'antd'
import { useEffect, useState } from 'react'



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([])
    const showDrawer = () => setOpen(true)
    const onClose = () => setOpen(false)
    const [count, setCount] = useState(0);

    useEffect(() => {
        var productList = localStorage.getItem('products')
        setProducts(JSON.parse(productList));
    }, [open])

    return (
        <div className='navbar' id='navbar'>
            <div className="container">
                <div className="navbar-menu ">
                    <div className="navbar-img">
                        <a href='#'><img src={logo}></img></a>
                        <p className='navbar-text'>Куда пицца</p>
                    </div>
                    <ul className='navbar-menu-list' id="navbar-menu-list">
                        {
                            menuData.map(item => <a href={item.href}>{item.name}</a>)
                        }
                    </ul>
                    <div className="navbar-img-btn" onClick={showDrawer} >
                        <img className='shop' src={shop} alt="" />
                        <p className='navbar-text-btn'>0 ₽</p>
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
                    <img className='close' src={close} alt="" onClick={onClose} />
                </div>
                {
                    products?.length ?
                        products.map((item, index) =>
                            <div
                                key={index}>
                                <div className='bugs-add'>
                                    <div className="bugs-img">
                                        <img className='images' src={item.img} alt="" />
                                    </div>
                                    <div className="bugs-info">
                                        <h4 className='bugs-title'>{item.name}</h4>
                                        <p className='bugs-text'>{item.text}</p>
                                        <div className="bugs-btns">
                                            <div className='bugs-btn'>
                                                <button className='bugs-button' onClick={() => setCount(count - 1)}>
                                                    -
                                                </button>
                                                <p className='count'>{count}</p>
                                                <button className='bugs-button' onClick={() => setCount(count + 1)}>
                                                    +
                                                </button>
                                            </div>
                                            <div className="bugs-prices">
                                                <p className='bugs-price'>{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        <div className="drawer-info">
                            <img className='big' src={big} alt="" />
                            <p className='big-text'>Ой, ваша корзина пуста! :</p>
                        </div>
                }

                <hr />
                <div className="drawer-fotter">
                    <p className='drawer-price'>Итого: 0 ₽</p>
                    <button className='drawer-btn'>Оформить заказ</button>
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar
