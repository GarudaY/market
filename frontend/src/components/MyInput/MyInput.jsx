import React from 'react'
import './MyInput.scss'

const MyInput = ({ view, onChange, value, placeholder, checked }) => {
  const handleChange = (event) => {
    const value = event.target.value
    onChange(value)
  }

  const renderInput = () => {
    switch (view) {
      case 'fromTo':
        return (
          <input
            className='fromTo'
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        )
      case 'checkbox':
        return (
          <input
            className='checkbox'
            type='checkbox'
            checked={checked}
            onChange={handleChange}
          />
        )
      case 'select':
        return (
          <select className='select' value={value} onChange={handleChange}>
            <option value='default'>Default</option>
            <option value='asc'>By Price Down</option>
            <option value='desc'>By Price Up</option>
          </select>
        )
      default:
        return null
    }
  }

  return <div>{renderInput()}</div>
}

export default MyInput
