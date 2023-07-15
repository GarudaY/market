import React, { useState } from 'react'
import './MyInput.scss'

const MyInput = ({ placeholder, view }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const inputValue = event.target.value
    if (inputValue.length <= 11) {
      setValue(inputValue)
    }
  }

  const handleSort = () => {}

  const renderInput = () => {
    switch (view) {
      case 'fromTo':
        return (
          <input
            className='fromTo'
            type='text'
            placeholder={placeholder}
            onChange={handleSort}
          />
        )
      case 'checkbox':
        return (
          <input className='checkbox' type='checkbox' onChange={handleSort} />
        )
      case 'select':
        return (
          <select className='select' onChange={handleSort}>
            <option value=''>by default</option>
            <option value=''>by price</option>
            <option value=''>by alphabet</option>
          </select>
        )
      default:
        return (
          <input
            className='my-input'
            type='number'
            name='handyNumber'
            placeholder='+49'
            value={value}
            onChange={handleChange}
          />
        )
    }
  }

  return <div>{renderInput()}</div>
}

export default MyInput
