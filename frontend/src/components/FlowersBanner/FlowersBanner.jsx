import React from 'react'
import MyButton from '../MyButton/MyButton'
import './FlowersBanner.scss'

const FlowersBanner = () => {
  return (
    <div className='flowers-banner'>
      <div className='flowers-banner__content'>
        <h1 className='flowers-banner__content__title'>Sale</h1>
        <h2 className='flowers-banner__content__description'>New season</h2>
        <MyButton
          view='white'
          text='Sale'
          fontSize='25'
          link='/categories/sales?discounted=true'
          width='155'
          height='82'
        ></MyButton>
      </div>
      <div className='flowers-banner__image'>
        <img src='/static/flowers.png' alt='flowers'></img>
      </div>
    </div>
  )
}

export default FlowersBanner
