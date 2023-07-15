import React from 'react'
import Header from '../../components/Header/Header'
import FlowersBanner from '../../components/FlowersBanner/FlowersBanner'
import CategoriesPreviewShowcase from '../../components/CategoriesPreviewShowcase/CategoriesPreviewShowcase'
import DworfBanner from '../../components/DworfBanner/DworfBanner'
import ProductSmallSchowcase from '../../components/ProductSmallSchowcase/ProductSmallSchowcase'
import Footer from '../../components/Footer/Footer'

const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <FlowersBanner></FlowersBanner>
      <CategoriesPreviewShowcase
        category='limited'
        title='Catalog'
      ></CategoriesPreviewShowcase>
      <DworfBanner></DworfBanner>
      <ProductSmallSchowcase quantity='limited'></ProductSmallSchowcase>
      <Footer></Footer>
    </div>
  )
}

export default MainPage
