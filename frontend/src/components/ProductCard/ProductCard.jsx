import React from 'react'
import './ProductCard.scss'

const ProductCard = ({ title, image, price, discontPrice }) => {
  const discountPercentage = Math.round((discontPrice / price) * 100 - 100)
  return (
    <div className='product-card-wrapper'>
      <div className='product-card-wrapper__container'>
        <img
          className='product-card-wrapper__container__img'
          src={'http://localhost:3333' + image}
          alt='Product Image'
        />
      </div>
      <div className='product-card-wrapper__prices'>
        <p className='product-card-wrapper__prices__price'>{price + '$'}</p>
        <p className='product-card-wrapper__prices__discount'>
          {discontPrice + '$'}
        </p>
        <p className='product-card-wrapper__prices__discPercentage'>
          {Math.abs(discountPercentage) + '%'}
        </p>
      </div>
      <h1 className='product-card-wrapper__title'>{title}</h1>
    </div>
  )
}

export default ProductCard
