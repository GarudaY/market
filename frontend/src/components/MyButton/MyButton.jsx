import React from 'react'
import './MyButton.scss'

const MyButton = ({
  view,
  text,
  link,
  width,
  height,
  fontSize,
  image,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (link) {
      window.location.href = link
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
  }
  return (
    <button
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}px`,
      }}
      onClick={handleClick}
    >
      {image && <img src={'static/box.png'} alt='' />}
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
    </button>
  )
}

export default MyButton
