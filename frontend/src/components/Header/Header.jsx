import React from 'react'
import MyButton from '../MyButton/MyButton'
import './Header.scss'
import HeaderLink from '../HeaderLink/HeaderLink'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__leftSide'>
        <div className='header__logo'>
          <img src='/static/logo.png' alt='logo'></img>
        </div>
        <div>
          <MyButton
            view='full'
            text='Catalog'
            link='/categories'
            width='125'
            height='49'
            fontSize='16'
          ></MyButton>
        </div>
      </div>
      <div className='header__rightSide'>
        <div className='header__rightSide__navLinks'>
          <HeaderLink text='Main Page' link='/'></HeaderLink>
          <HeaderLink text='All Products' link='/categories/all'></HeaderLink>
          <HeaderLink text='All Sales' link='/allProducts'></HeaderLink>
        </div>
        <div className='header__rightSide__navBox'>
          <MyButton
            link='/SchoppingCart'
            width='30'
            height='30'
            image='/static/box.png'
          ></MyButton>
        </div>
      </div>
    </div>
  )
}

export default Header
