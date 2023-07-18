import React from 'react'
import './ProductCard.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({ title, image, price, discontPrice, id }) => {
  const discountPercentage = Math.round(((price - discontPrice) / price) * 100)

  return (
    <div className='product-card-wrapper'>
      <Link to={'/product/' + id} className='product-card-wrapper__link'>
        <div className='product-card-wrapper__link__container'>
          <img
            className='product-card-wrapper__link__container__img'
            src={'http://localhost:3333' + image}
            alt='Product Image'
          />
        </div>
        <div className='product-card-wrapper__link__prices'>
          <p className='product-card-wrapper__link__prices__price'>
            {price + '$'}
          </p>
          {discontPrice && (
            <p className='product-card-wrapper__link__prices__discount'>
              {discontPrice + '$'}
            </p>
          )}
          {discontPrice && (
            <p className='product-card-wrapper__link__prices__discPercentage'>
              {discountPercentage + '%'}
            </p>
          )}
        </div>
        <h1 className='product-card-wrapper__link__title'>{title}</h1>
      </Link>
    </div>
  )
}

export default ProductCard
