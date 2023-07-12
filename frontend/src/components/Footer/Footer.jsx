import React from 'react'
import './Footer.scss'
import MyButton from '../MyButton/MyButton'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__content__contacts'>
          <h2 className='footer__content__contacts__title'>Contact</h2>
          <p className='footer__content__contacts__handy'>+49 999 999 99 99</p>
          <div className='footer__content__contacts__btn'>
            <MyButton
              image='static/inst.png'
              width='80'
              height='80'
              text='Instagram'
              fontSize='15'
              fontWeight='600'
            ></MyButton>
            <MyButton
              image='static/whatsapp.png'
              width='80'
              height='80'
              text='WhatsApp'
              fontSize='15'
              fontWeight='600'
            ></MyButton>
          </div>
        </div>
        <div className='footer__content__adress'>
          <h2 className='footer__content__adress__title'>Adress</h2>
          <a
            href='https://www.google.com/search?q=telranDE'
            className='footer__content__adress__coordinates'
          >
            Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
          </a>
          <p className='footer__content__adress__descr'>Working Hours:</p>
          <p className='footer__content__adress__descrTime'>24 hours a day</p>
        </div>
      </div>
      <div className='footer__map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409222750825!2d13.37285601580702!3d52.50793287981184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1689174087109!5m2!1sru!2sde'
          width='1400'
          height='525'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  )
}

export default Footer
