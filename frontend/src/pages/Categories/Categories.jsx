import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CategoriesPreviewShowcase from '../../components/CategoriesPreviewShowcase/CategoriesPreviewShowcase'

const Categories = () => {
  return (
    <div>
      <Header></Header>
      <CategoriesPreviewShowcase
        category='full'
        title='Categories'
      ></CategoriesPreviewShowcase>
      <Footer></Footer>
    </div>
  )
}

export default Categories
