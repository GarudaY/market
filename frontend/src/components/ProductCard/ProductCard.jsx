import React from 'react'
import './ProductCard.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addToCart } from '../../redux/actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'

const ProductCard = ({
  id,
  title,
  image,
  price,
  discont_price,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const discontPercentage = Math.round(((price - discont_price) / price) * 100)
  const cartItems = useSelector((state) => state.cart)
  const selectedProduct = useSelector((state) => state.selectedProduct)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      title,
      image,
      price,
      description,
      discont_price,
      quantity: 1,
    }
    setIsAddedToCart(true)
    dispatch(addToCart(productToAdd))
  }

  return (
    <div
      className='product-card-wrapper'
      onMouseEnter={() => setIsHovered(true)}
    >
      <Link to={'/product/' + id} className='product-card-wrapper__link'>
        <div className='product-card-wrapper__link__container'>
          <img
            className='product-card-wrapper__link__container__img'
            src={'http://localhost:3333' + image}
            alt='Product Image'
          />
        </div>
        <div className='product-card-wrapper__link__prices'>
          {!discont_price ? (
            <React.Fragment>
              <p className='product-card-wrapper__link__prices__price'>
                {price.toFixed(2) + '$'}
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className='product-card-wrapper__link__prices__price'>
                {discont_price.toFixed(2) + '$'}
              </p>
              <p className='product-card-wrapper__link__prices__discount'>
                {price.toFixed(2) + '$'}
              </p>

              <p className='product-card-wrapper__link__prices__discPercentage'>
                {discontPercentage + '%'}
              </p>
            </React.Fragment>
          )}
        </div>
        <h1 className='product-card-wrapper__link__title'>{title}</h1>
      </Link>
      {isHovered && !isAddedToCart && (
        <div
          className='product-card-wrapper__hoverBtn'
          onClick={handleAddToCart}
        >
          To Cart
        </div>
      )}
      {!isAddedToCart && (
        <div className='product-card-wrapper__addedToCartBefore'>✓ Added</div>
      )}{' '}
      {isAddedToCart && (
        <div className='product-card-wrapper__addedToCartAfter'>✓ Added</div>
      )}
    </div>
  )
}

export default ProductCard
