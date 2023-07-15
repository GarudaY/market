import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import './ProductSmallSchowcase.scss'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../../redux/actions/productsActions'
import ProductSorting from '../ProductSorting/ProductSorting'

const ProductSmallSchowcase = ({ quantity }) => {
  const dispatch = useDispatch()
  const categoryProducts = useSelector((state) => state.products)
  const id = useParams()

  const categoryTitle = useSelector((state) => {
    const category = state.categories.categories.find(
      (item) => item.id === parseInt(id.categoryName)
    )
    return category ? category.title : ''
  })

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch, id])

  let renderedProducts = []

  switch (id.categoryName) {
    case 'all':
      renderedProducts = categoryProducts
      break
    case undefined:
      renderedProducts = categoryProducts
        .filter(
          (item) =>
            item.discont_price !== null && item.discont_price !== undefined
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
      break
    default:
      renderedProducts = categoryProducts.filter(
        (item) => item.categoryId === parseInt(id.categoryName)
      )
      break
  }

  return (
    <div className='prodSchowcase-wrapper'>
      <h2 className='prodSchowcase-wrapper__title'>
        {id.categoryName === 'all'
          ? 'All Products'
          : id.categoryName
          ? categoryTitle
          : 'Sale'}
      </h2>
      {id.categoryName === '' && <ProductSorting></ProductSorting>}
      <div className='prodSchowcase-wrapper__card'>
        {renderedProducts.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            image={item.image}
            id={item.id}
            discontPrice={item.discont_price}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSmallSchowcase
