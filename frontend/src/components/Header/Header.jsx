import MyButton from '../MyButton/MyButton'
import './Header.scss'
import HeaderLink from '../HeaderLink/HeaderLink'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__leftSide'>
        <div className='header__logo'>
          <Link to='/'>
            <img src='/static/logo.png' alt='logo' />
          </Link>
        </div>
        <div>
          <MyButton
            view='full'
            text='Catalog'
            link='/categories'
            width='125'
            height='49'
            fontSize='16'
          />
        </div>
      </div>
      <div className='header__rightSide'>
        <div className='header__rightSide__navLinks'>
          <HeaderLink text='Main Page' link='/' />
          <HeaderLink text='All Products' link='/categories/all' />
          <HeaderLink
            text='All Sales'
            link='/categories/sales?discounted=true'
          />
        </div>
        <div className='header__rightSide__navBox'>
          <MyButton
            link='/shoppingCart'
            width='30'
            height='30'
            image='/static/box.png'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
