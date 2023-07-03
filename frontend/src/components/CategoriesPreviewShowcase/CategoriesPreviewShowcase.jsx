import React, { useState, useEffect } from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './CategoriesPreviewShowcase.scss'
import MyButton from '../MyButton/MyButton'

const CategoriesPreviewShowcase = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/categories/all')
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
    <div className='categories-wrapper'>
      <div className='categories-wrapper__header'>
        <h2 className='categories-wrapper__header__title'>Catalog</h2>
        <MyButton
          view='gray'
          fontSize='12px'
          width='120'
          height='35'
          text='All categories'
        ></MyButton>
      </div>
      <div className='categories-wrapper__cards-wrapper'>
        {data.slice(0, 4).map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoriesPreviewShowcase
