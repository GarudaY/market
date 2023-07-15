import React, { useEffect, useState } from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import { useSelector, useDispatch } from 'react-redux'
import './CategoriesPreviewShowcase.scss'
import MyButton from '../MyButton/MyButton'
import {
  loadCategories,
  selectCategory,
} from '../../redux/actions/categoryActions'
import { Link } from 'react-router-dom'

const CategoriesPreviewShowcase = ({ category, title }) => {
  const categories = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState(null)

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
          <Link to='/categories' className='my-link'>
            {' '}
            <MyButton
              view='gray'
              fontSize='12px'
              width='120'
              height='35'
              text='All categories'
              link='/categories'
            />
          </Link>
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
              />
            ))}
      </div>
    </div>
  )
}

export default CategoriesPreviewShowcase
