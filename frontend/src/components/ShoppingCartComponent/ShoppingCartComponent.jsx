import React, { useState } from 'react'
import './ShoppingCartComponent.scss'
import { useSelector } from 'react-redux'
import CartProduct from '../CartProduct/CartProduct'
import { Link } from 'react-router-dom'
import MyInput from '../MyInput/MyInput'
import MyButton from '../MyButton/MyButton'

const ShoppingCartComponent = () => {
  const productsInCart = useSelector((state) => state.cart)
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleInputChange = (event) => {
    const newPhoneNumber = event.target.value
    setPhoneNumber(newPhoneNumber)
  }

  const getTotalPrice = () => {
    let totalPrice = 0
    productsInCart.forEach((product) => {
      if (product.discont_price) {
        totalPrice += product.discont_price * product.quantity
      } else {
        totalPrice += product.price * product.quantity
      }
    })
    return totalPrice.toFixed(2)
  }

  const uniqueProducts = productsInCart.reduce((acc, product) => {
    if (!acc[product.id]) {
      acc[product.id] = {
        ...product,
        quantity: 1,
      }
    } else {
      acc[product.id].quantity++
    }
    return acc
  }, {})

  const uniqueProductArray = Object.values(uniqueProducts)

  const sendRequest = async () => {
    try {
      const response = await fetch('http://localhost:3333/order/send', {
        method: 'POST',
        body: JSON.stringify({ phoneNumber }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        console.log(response.statusText)
      } else {
        throw new Error('Error!')
      }
    } catch (error) {
      console.error(error)
      window.location.replace('/error')
    }
  }

  return (
    <div className='shopping-cart'>
      <div className='shopping-cart__cartSide'>
        <div className='shopping-cart__cartSide__topWrapper'>
          <h1 className='shopping-cart__cartSide__topWrapper__title'>
            Shopping cart
          </h1>
          <div className='shopping-cart__cartSide__topWrapper__linkWrapper'>
            <Link
              className='shopping-cart__cartSide__topWrapper__linkWrapper__link'
              to={'/categories/all'}
            >
              Back to the store
              <svg
                width='15'
                height='21'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.49653 1.19763C4.37465 1.19763 4.26567 1.27146 4.21879 1.38396C4.17309 1.49763 4.20004 1.62654 4.28793 1.71208L10.0758 7.49998L4.28793 13.2879C4.20942 13.3629 4.17778 13.4754 4.2059 13.5797C4.23286 13.6851 4.31489 13.7672 4.42036 13.7941C4.52465 13.8222 4.63715 13.7906 4.71215 13.7121L10.7122 7.71208C10.8293 7.5949 10.8293 7.40505 10.7122 7.28787L4.71215 1.28787C4.6559 1.22927 4.57856 1.19763 4.49653 1.19763Z'
                  fill='black'
                />
              </svg>
            </Link>
          </div>
        </div>
        <hr className='shopping-cart__cartSide__divider' />
        <div>
          {uniqueProductArray.length !== 0 ? (
            uniqueProductArray.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                discont_price={
                  product.discont_price != null && product.discont_price
                }
                quantity={product.quantity}
              />
            ))
          ) : (
            <p className='shopping-cart__cartSide__emptyBox'>Empty =(</p>
          )}
        </div>
      </div>
      <div className='shopping-cart__orderSide'>
        <h2 className='shopping-cart__orderSide__title'>Order details</h2>
        <div className='shopping-cart__orderSide__totalPriceWrapper'>
          <p className='shopping-cart__orderSide__totalPriceWrapper__total'>
            Total
          </p>
          <p className='shopping-cart__orderSide__totalPriceWrapper__totalPrice'>
            {getTotalPrice()}
            <span style={{ fontSize: '12px' }}>$</span>
          </p>
        </div>
        <div className='shopping-cart__orderSide__input'>
          <MyInput
            view='my-input'
            width='440'
            placeholder='Phone number'
            onChange={handleInputChange}
          />
        </div>
        <MyButton
          fontWeight='700'
          text='Order'
          view='full'
          width='446'
          height='75'
          fontSize='30'
          borderRadius='25'
          onClick={sendRequest}
        />
      </div>
    </div>
  )
}

export default ShoppingCartComponent
