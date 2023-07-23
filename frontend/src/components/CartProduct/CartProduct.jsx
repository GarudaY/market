import React from 'react'
import './CartProduct.scss'
import { useDispatch } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  removeAllById,
} from '../../redux/actions/cartActions'

const CartProduct = ({
  id,
  title,
  description,
  image,
  price,
  discont_price,
  quantity,
}) => {
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
    dispatch(addToCart(productToAdd))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }

  const handleRemoveAllById = () => {
    dispatch(removeAllById(id))
  }

  const totalPrice = (discont_price || price) * quantity
  const beforeDiscountPrice = price * quantity
  return (
    <div>
      <div className='cartProduct-wrapper'>
        <img
          className='cartProduct-wrapper__img'
          src={'http://localhost:3333' + image}
          alt={title}
        />
        <div className='cartProduct-wrapper__content'>
          <div className='cartProduct-wrapper__content__middlePart'>
            <h1 className='cartProduct-wrapper__content__middlePart__title'>
              {title}
            </h1>
            <div className='cartProduct-wrapper__content__middlePart__btnWrapper'>
              <button
                className='cartProduct-wrapper__content__middlePart__btnWrapper__btn'
                onClick={handleRemoveFromCart}
              >
                <svg width='20' height='20' viewBox='0 0 20 20'>
                  <path d='M3 9h14v2H3z' />
                </svg>
              </button>
              <h1 className='cartProduct-wrapper__content__middlePart__btnWrapper__quantity'>
                {quantity}
              </h1>
              <button
                className='cartProduct-wrapper__content__middlePart__btnWrapper__btn'
                onClick={handleAddToCart}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 5V19M5 12H19' stroke='black' strokeWidth='2' />
                </svg>
              </button>
            </div>
          </div>
          <div className='cartProduct-wrapper__content__prices'>
            {discont_price && (
              <p className='cartProduct-wrapper__content__prices__price'>
                {totalPrice.toFixed(2) + '$'}
              </p>
            )}
            {!discont_price ? (
              <p className='cartProduct-wrapper__content__prices__price'>
                {totalPrice.toFixed(2) + '$'}
              </p>
            ) : (
              <p className='cartProduct-wrapper__content__prices__discountPrice'>
                {beforeDiscountPrice.toFixed(2) + '$'}
              </p>
            )}
          </div>
          <div>
            <button
              onClick={handleRemoveAllById}
              className='cartProduct-wrapper__content__deleteBtn'
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.6438 0.799988L0.800049 1.64374L7.17505 7.99999L0.800049 14.3562L1.6438 15.2L8.03755 8.84374L14.4125 15.2L15.2563 14.3562L8.8813 7.99999L15.2563 1.64374L14.4125 0.799988L8.03755 7.15624L1.6438 0.799988Z'
                  fill='black'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr className='divider' />
    </div>
  )
}

export default CartProduct
