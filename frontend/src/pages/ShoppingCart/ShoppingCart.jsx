import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ShoppingCartComponent from '../../components/ShoppingCartComponent/ShoppingCartComponent'

const ShoppingCart = () => {
  return (
    <div>
      <Header></Header>
      <ShoppingCartComponent></ShoppingCartComponent>
      <Footer></Footer>
    </div>
  )
}

export default ShoppingCart
