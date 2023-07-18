import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { selectProduct } from '../../redux/actions/productsActions'

const ProductPage = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const { id } = useParams()
  const selectedProduct = useSelector((state) => state.selectedProduct)

  useEffect(() => {
    const filteredProduct = products.find((item) => item.id === parseInt(id))
    dispatch(selectProduct(filteredProduct))
  }, [dispatch])
  console.log(selectedProduct)
  return (
    <div>
      <Header />
      <div>
        <h1></h1>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
