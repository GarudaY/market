import React from 'react'
import AllProducts from '../pages/AllProducts/AllProducts'
import Categories from '../pages/Categories/Categories'
import CategorySchowcase from '../pages/CategorySchowcase/CategorySchowcase'
import MainPage from '../pages/MainPage/MainPage'
import Error from '../pages/Error/Error'
import ProductCard from '../pages/ProductCard/ProductCard'
import SaleProducts from '../pages/SaleProducts/SaleProducts'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/allProducts' element={<AllProducts />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/categotySchowcase' element={<CategorySchowcase />} />
      <Route path='/error' element={<Error />} />
      <Route path='/productCard' element={<ProductCard />} />
      <Route path='/saleProducts' element={<SaleProducts />} />
      <Route path='/shoppingCart' element={<ShoppingCart />} />
    </Routes>
  )
}

export default Router
