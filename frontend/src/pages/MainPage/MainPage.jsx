import React from 'react'
import Header from '../../components/Header/Header'
import FlowersBanner from '../../components/FlowersBanner/FlowersBanner'
import CategoriesPreviewShowcase from '../../components/CategoriesPreviewShowcase/CategoriesPreviewShowcase'
import DworfBanner from '../../components/DworfBanner/DworfBanner'

const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <FlowersBanner></FlowersBanner>
      <CategoriesPreviewShowcase></CategoriesPreviewShowcase>
      <DworfBanner></DworfBanner>
    </div>
  )
}

export default MainPage
