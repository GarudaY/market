import React from 'react'
import './CategoryCard.scss'
import { Link } from 'react-router-dom'

const CategoryCard = ({ id, title, image, onClick, active, quantity }) => {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <div>
      <Link
        className={`card-wrapper ${active ? 'active' : ''}`}
        to={`/categories/${id}`}
        onClick={handleClick}
      >
        <img
          className='card-wrapper__img'
          src={'http://localhost:3333' + image}
          alt='Category Image'
        />
        <h3 className='card-wrapper__title'>{title}</h3>
      </Link>
    </div>
  )
}

export default CategoryCard
