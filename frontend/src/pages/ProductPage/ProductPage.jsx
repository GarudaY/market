// ProductPage.js
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProduct } from '../../redux/actions/productsActions'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MyButton from '../../components/MyButton/MyButton'
import './ProductPage.scss'
import { addToCart } from '../../redux/actions/cartActions'

const ProductPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const products = useSelector((state) => state.products)
  const [loading, setLoading] = useState(true)
  const selectedProduct = useSelector((state) => state.selectedProduct)
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    const filteredProduct = products.find((item) => item.id === parseInt(id))

    if (filteredProduct) {
      dispatch(selectProduct(filteredProduct))
      saveSelectedProductToLocalStorage(filteredProduct)
      setLoading(false)
    } else {
      const storedProduct = getSelectedProductFromLocalStorage()
      if (storedProduct) {
        dispatch(selectProduct(storedProduct))
      }
      setLoading(false)
    }
  }, [dispatch, id, products])

  const saveSelectedProductToLocalStorage = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product))
  }

  const getSelectedProductFromLocalStorage = () => {
    const product = localStorage.getItem('selectedProduct')
    return product ? JSON.parse(product) : null
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!selectedProduct) {
    return <div>Product not found.</div>
  }
  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct))
  }

  return (
    <div>
      <Header />
      <div className='product-page-wrapper'>
        <div className='product-page-wrapper__contentSide'>
          <h1 className='product-page-wrapper__contentSide__title'>
            {selectedProduct.title}
          </h1>
          <img
            className='product-page-wrapper__contentSide__img'
            src={'http://localhost:3333' + selectedProduct.image}
          />
        </div>
        <div className='product-page-wrapper__descrSide'>
          <div className='product-page-wrapper__descrSide__prices'>
            <p className='product-page-wrapper__descrSide__prices__normalPrice'>
              {selectedProduct.price}
              {selectedProduct.price && (
                <span style={{ fontSize: '20px', display: 'inline-block' }}>
                  $
                </span>
              )}
            </p>
            <p className='product-page-wrapper__descrSide__prices__discontPrice'>
              {selectedProduct.discont_price && (
                <>
                  {selectedProduct.discont_price}
                  <span style={{ fontSize: '15px', display: 'inline-block' }}>
                    $
                  </span>
                </>
              )}
            </p>

            <p className='product-page-wrapper__descrSide__prices__percent'>
              {selectedProduct.discont_price !== null || undefined
                ? Math.round(
                    ((selectedProduct.price - selectedProduct.discont_price) /
                      selectedProduct.price) *
                      100
                  ) + '%'
                : ''}
            </p>
          </div>

          <MyButton
            view='full'
            text='To cart'
            width='340'
            height='85'
            fontSize='28'
            fontWeight='700'
            link='/shoppingCart'
            onClick={handleAddToCart}
          ></MyButton>
          <hr className='product-page-wrapper__descrSide__divider' />
          <p className='product-page-wrapper__descrSide__descr'>
            Description:
            <br />
            {selectedProduct.description}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
