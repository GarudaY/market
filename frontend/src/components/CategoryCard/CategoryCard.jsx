import React from 'react'
import './CategoryCard.scss'
import { Link } from 'react-router-dom'
import categories from '../../pages/Categories/Categories'

const CategoryCard = ({ id, title, image }) => {
  const trimmedStr = title.replace(/\s/g, '')
  return (
    <Link className='card-wrapper' to={`/categories/${trimmedStr}`}>
      <img
        className='card-wrapper__img'
        src={'http://localhost:3333' + image}
        alt='Category Image'
      ></img>
      <h3 className='card-wrapper__title'>{title}</h3>
    </Link>
  )
}

export default CategoryCard
