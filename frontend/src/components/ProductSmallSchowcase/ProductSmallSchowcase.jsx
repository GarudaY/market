import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import './ProductSmallSchowcase.scss'
import { loadProducts } from '../../redux/actions/productsActions'
import ProductSorting from '../ProductSorting/ProductSorting'

const ProductSmallSchowcase = () => {
  const dispatch = useDispatch()
  const { categoryName } = useParams()
  const categoryProducts = useSelector((state) => state.products)
  const categories = useSelector((state) => state.categories.categories)
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortValue, setSortValue] = useState('')

  const handleFilter = (fromPrice, toPrice, showDiscountedItems, sortValue) => {
    searchParams.set('fromPrice', fromPrice)
    searchParams.set('toPrice', toPrice)
    searchParams.set('showDiscountedItems', showDiscountedItems)
    searchParams.set('sortValue', sortValue)
    navigate(`${location.pathname}?${searchParams.toString()}`)
  }

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  useEffect(() => {
    let sortedProducts = categoryProducts

    const fromPrice = parseFloat(searchParams.get('fromPrice')) || ''
    const toPrice = parseFloat(searchParams.get('toPrice')) || ''
    const showDiscountedItems =
      searchParams.get('showDiscountedItems') === 'true'

    if (showDiscountedItems) {
      sortedProducts = sortedProducts.filter(
        (item) =>
          item.discont_price !== null && item.discont_price !== undefined
      )
    }

    if (fromPrice !== '' && toPrice !== '') {
      sortedProducts = sortedProducts.filter(
        (item) => item.price >= fromPrice && item.price <= toPrice
      )
    } else if (fromPrice !== '') {
      sortedProducts = sortedProducts.filter((item) => item.price >= fromPrice)
    } else if (toPrice !== '') {
      sortedProducts = sortedProducts.filter((item) => item.price <= toPrice)
    }

    if (sortValue === 'asc') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price)
    } else if (sortValue === 'desc') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(sortedProducts)
  }, [categoryProducts, location.search, sortValue])

  useEffect(() => {
    const sortValue = searchParams.get('sortValue') || ''
    setSortValue(sortValue)
  }, [location.search])

  let renderedProducts = []

  if (!categoryName) {
    renderedProducts = filteredProducts
      .filter(
        (item) =>
          item.discont_price !== null && item.discont_price !== undefined
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
  } else if (categoryName === 'all') {
    renderedProducts = filteredProducts
  } else if (categoryName === 'sales') {
    renderedProducts = filteredProducts.filter(
      (item) => item.discont_price !== null && item.discont_price !== undefined
    )
  } else {
    renderedProducts = filteredProducts.filter(
      (item) => item.categoryId === parseInt(categoryName)
    )
  }

  if (categoryName === ' ') {
    renderedProducts = renderedProducts.slice(0, 4)
  }

  const pageTitle =
    categoryName === 'all'
      ? 'All products'
      : categoryName === 'sales'
      ? 'Products with sale'
      : categories.find((category) => category.id === parseInt(categoryName))
          ?.title || 'Sales'

  return (
    <div className='prodSchowcase-wrapper'>
      <h2 className='prodSchowcase-wrapper__title'>{pageTitle}</h2>
      {categoryName && (
        <ProductSorting
          onFilter={handleFilter}
          showDiscountedItems={
            searchParams.get('showDiscountedItems') === 'true'
          }
          sortValue={sortValue}
        />
      )}
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
