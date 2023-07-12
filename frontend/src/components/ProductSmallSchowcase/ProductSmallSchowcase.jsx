import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductSmallSchowcase.scss'

const ProductSmallSchowcase = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3333/products/all')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Ошибка сети')
        }
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className='prodSchowcase-wrapper'>
      <h2 className='prodSchowcase-wrapper__title'>Sale</h2>
      <div className='prodSchowcase-wrapper__card'>
        {data
          .filter(
            (item) =>
              item.discont_price !== null && item.discont_price !== undefined
          )
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .map((item) => (
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
