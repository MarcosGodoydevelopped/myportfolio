import React from 'react'
import CTA from './CTA'
import ME from '../../assets/Me0..png'
import './header.css'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
   <header>
       <div className='container header-container'>
           <h5>Hola soy</h5>
           <h1>Marcos Esteban</h1>
           <CTA/>
           <HeaderSocial/>
           <div className='me'>
           <img src={ME} alt='me' />
           </div>
           <a href='#contact' className='scroll-down'>scroll down</a>
           </div>
   </header>
  )
}

export default Header