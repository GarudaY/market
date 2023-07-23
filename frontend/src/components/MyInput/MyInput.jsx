import React, { useState, useEffect } from 'react'
import './MyInput.scss'

const MyInput = ({ view, onChange, value, placeholder, checked, width }) => {
  const [inputValue, setInputValue] = useState(value || '')

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  const handleChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
    onChange(newValue)
  }

  const handleChangeNumber = (event) => {
    const newInputValue = event.target.value
    const onlyDigits = /^\d{0,11}$/.test(newInputValue)

    if (onlyDigits) {
      setInputValue(newInputValue)
      onChange(event)
    }
  }

  const renderInput = () => {
    switch (view) {
      case 'my-input':
        return (
          <input
            className='my-input'
            style={{ width: `${width}px` }}
            value={inputValue}
            onChange={handleChangeNumber}
            placeholder={placeholder}
          />
        )
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
            <option value='desc'>From low to high</option>
            <option value='asc'>From high to low</option>
          </select>
        )
      default:
        return null
    }
  }

  return <div>{renderInput()}</div>
}

export default MyInput
