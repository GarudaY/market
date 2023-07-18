import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './ProductSorting.scss'
import MyInput from '../MyInput/MyInput'

const ProductSorting = ({ onFilter, showDiscountedItems, sortValue }) => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [fromPrice, setFromPrice] = useState(
    searchParams.get('fromPrice') || ''
  )
  const [toPrice, setToPrice] = useState(searchParams.get('toPrice') || '')
  const [selectValue, setSelectValue] = useState(sortValue)
  const [displayCheckbox, setDisplayCheckbox] = useState(true)

  const handleFromPriceChange = (value) => {
    setFromPrice(value)
  }

  const handleToPriceChange = (value) => {
    setToPrice(value)
  }

  const handleCheckboxChange = () => {
    const updatedShowDiscountedItems = !showDiscountedItems
    searchParams.set('showDiscountedItems', updatedShowDiscountedItems)
    onFilter(fromPrice, toPrice, updatedShowDiscountedItems, selectValue)
  }

  const handleSortChange = (value) => {
    setSelectValue(value)
    searchParams.set('sortValue', value)
    onFilter(fromPrice, toPrice, showDiscountedItems, value)
  }

  useEffect(() => {
    onFilter(fromPrice, toPrice, showDiscountedItems, sortValue)
  }, [fromPrice, toPrice, showDiscountedItems, sortValue])

  useEffect(() => {
    const sortValue = searchParams.get('sortValue') || ''
    setSelectValue(sortValue)
  }, [location.search])

  useEffect(() => {
    if (location.pathname === '/categories/sales') {
      setDisplayCheckbox(false)
    } else {
      setDisplayCheckbox(true)
    }
  }, [location.pathname])

  return (
    <div className='sorting-wrapper'>
      <p className='sorting-wrapper__title'>Price</p>
      <div className='sorting-wrapper__fromTo'>
        <MyInput
          view='fromTo'
          placeholder='from'
          value={fromPrice}
          onChange={handleFromPriceChange}
        />
        <MyInput
          view='fromTo'
          placeholder='to'
          value={toPrice}
          onChange={handleToPriceChange}
        />
      </div>
      {displayCheckbox && (
        <div className='sorting-wrapper__discount-wrapper'>
          <p className='sorting-wrapper__discount-wrapper__title'>
            Discounted items
          </p>
          <div className='sorting-wrapper__discount-wrapper__checkBox'>
            <MyInput
              view='checkbox'
              checked={showDiscountedItems}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      )}
      <p className='sorting-wrapper__title'>Sorted</p>
      <div className='sorting-wrapper__select'>
        <MyInput
          view='select'
          value={selectValue}
          onChange={handleSortChange}
        />
      </div>
    </div>
  )
}

export default ProductSorting
