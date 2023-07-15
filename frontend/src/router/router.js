import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import Categories from '../pages/Categories/Categories'
import CategoryShowcase from '../pages/CategorySchowcase/CategoryShowcase'
import Error from '../pages/Error/Error'
import ProductPage from '../pages/ProductPage/ProductPage'
import SaleProducts from '../pages/SaleProducts/SaleProducts'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/categories' element={<Categories />} />
      <Route
        path='/categories/:categoryName'
        element={<CategoryShowcase />}
      />{' '}
      <Route path='/error' element={<Error />} />
      <Route path='/productCard' element={<ProductPage />} />
      <Route path='/saleProducts' element={<SaleProducts />} />
      <Route path='/shoppingCart' element={<ShoppingCart />} />
    </Routes>
  )
}

export default Router
