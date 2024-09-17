import React from 'react'
import Menu from '../../components/menu/Menu'
import Hero from '../../components/hero/Hero'
import Pizza from '../pizza/Pizza'
import Sushi from '../sushi/Sushi'
import Snack from '../snack/Snack'
import Desert from '../desert/Desert'
import Drink from '../drink/Drink'
import Sous from '../sous/Sous'
import Combo from '../combo/Combo'

const Home = () => {
    return (
        <>
            <Menu />
            <Hero />
            <Pizza />
            <Sushi />
            <Snack />
            <Desert />
            <Drink />
            <Sous />
            <Combo />
        </>
    )
}

export default Home
