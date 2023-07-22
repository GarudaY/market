import React, { useState } from 'react'
import './DworfBanner.scss'
import MyInput from '../MyInput/MyInput'
import MyButton from '../MyButton/MyButton'

const DworfBanner = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleInputChange = (event) => {
    const newPhoneNumber = event.target.value
    setPhoneNumber(newPhoneNumber)
  }

  const sendRequest = async () => {
    try {
      const response = await fetch('http://localhost:3333/sale/send', {
        method: 'POST',
        body: JSON.stringify({ phoneNumber }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        console.log(response.statusText)
      } else {
        throw new Error('Error!')
      }
    } catch (error) {
      console.error(error)
      window.location.replace('/error')
    }
  }

  return (
    <div className='dwarf-banner'>
      <img src='/static/dwarf.png' className='dwarf-banner__img' />
      <div className='dwarf-banner__contentSide'>
        <h1 className='dwarf-banner__contentSide__title'>5% off</h1>
        <h2 className='dwarf-banner__contentSide__description'>
          on the first order
        </h2>
        <div className='dwarf-banner__contentSide__input'>
          <MyInput
            view='my-input'
            width='473'
            placeholder='+49'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <MyButton
            view='empty'
            width='473'
            height='75'
            text='Get a discount'
            fontSize='29'
            onClick={sendRequest}
          />
        </div>
      </div>
    </div>
  )
}

export default DworfBanner
