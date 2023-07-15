import React from 'react'
import './MyButton.scss'
import { Link } from 'react-router-dom'

const MyButton = ({
  view,
  text,
  link,
  width,
  height,
  fontSize,
  image,
  onClick,
  fontWeight,
}) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick()
    } else if (link) {
      return link
    }
  }

  let className = 'my-button'
  if (view === 'full') {
    className += '__full-btn'
  } else if (view === 'empty') {
    className += '__empty-btn'
  } else if (view === 'white') {
    className += '__white-btn'
  } else if (view === 'gray') {
    className += '__gray-btn'
  } else if (image) {
    className += '__img-btn'
    if (text) {
      className += '__with-text'
    }
  }
  return (
    <Link to={link} onClick={handleClick}>
      <button
        className={className}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${fontSize}px`,
          fontWeight: `${fontWeight}px`,
        }}
      >
        {image && <img src={image} />}
        {text && <p style={{ fontSize: `${fontSize}px` }}>{text}</p>}
      </button>
    </Link>
  )
}

export default MyButton
