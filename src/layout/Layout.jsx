import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Fotter from '../components/fotter/Fotter'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <Navbar/>
      {children}
      <Fotter/>
    </div>
  )
}

export default Layout
