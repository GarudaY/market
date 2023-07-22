import React, { useEffect, useState } from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import { useSelector, useDispatch } from 'react-redux'
import './CategoriesPreviewShowcase.scss'
import MyButton from '../MyButton/MyButton'
import {
  loadCategories,
  selectCategory,
} from '../../redux/actions/categoryActions'

const CategoriesPreviewShowcase = ({ category, title }) => {
  const categories = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  return (
    <div className='categories-wrapper'>
      <div className='categories-wrapper__header'>
        <h2
          className={`categories-wrapper__header__title${
            category === 'limited' ? '__limited' : ''
          }`}
        >
          {title}
        </h2>
        {category === 'limited' && (
          <MyButton
            view='gray'
            fontSize='12px'
            width='120'
            height='35'
            text='All categories'
            link='/categories'
          />
        )}
      </div>
      <div
        className={`categories-wrapper__cards-wrapper${
          category === 'limited' ? '__limited' : ''
        }`}
      >
        {category === 'limited' && categories.length > 0
          ? categories
              .slice(0, 4)
              .map((item) => (
                <CategoryCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  id={item.id}
                  onClick={() => dispatch(selectCategory(item.id))}
                />
              ))
          : categories.map((item) => (
              <CategoryCard
                key={item.id}
                title={item.title}
                image={item.image}
                id={item.id}
                onClick={() => dispatch(selectCategory(item.id))}
                quantity={1}
              />
            ))}
      </div>
    </div>
  )
}

export default CategoriesPreviewShowcase
