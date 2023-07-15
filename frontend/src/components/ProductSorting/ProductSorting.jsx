import React, { useState } from 'react'
import './ProductSorting.scss'
import MyInput from '../MyInput/MyInput'

const ProductSorting = () => {
  return (
    <div className='sorting-wrapper'>
      <p className='sorting-wrapper__title'>Price</p>
      <div className='sorting-wrapper__fromTo'>
        <MyInput view='fromTo' placeholder='from' />
        <MyInput view='fromTo' placeholder='to' />
      </div>
      <p className='sorting-wrapper__title'>Discounted items</p>
      <div className='sorting-wrapper__checkBox'>
        <MyInput view='checkbox' />
      </div>
      <p className='sorting-wrapper__title'>Sorted</p>
      <div className='sorting-wrapper__select'>
        <MyInput view='select' />
      </div>
    </div>
  )
}

export default ProductSorting
