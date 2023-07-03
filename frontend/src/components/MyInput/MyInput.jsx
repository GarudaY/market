import React, { useState } from 'react'
import './MyInput.scss'

const MyInput = () => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const inputValue = event.target.value
    if (inputValue.length <= 11) {
      setValue(inputValue)
    }
  }

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

export default MyInput
