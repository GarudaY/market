import React from 'react'
import './HeaderLink.scss'
import { Link } from 'react-router-dom'

const HeaderLink = ({ link, text }) => {
  return (
    <Link to={link} className='link'>
      {text}
    </Link>
  )
}

export default HeaderLink
