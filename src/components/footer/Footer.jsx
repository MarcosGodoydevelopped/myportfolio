import React from 'react'
import './footer.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer-logo'>Marcos Esteban</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer-socials'>
      <a href='https://www.linkedin.com/in/marcos-godoy123456' className='footer-socials-icon'><BsLinkedin /></a>
      <a href='https://github.com/MarcosGodoydevelopped' className='footer-socials-icon'><BsGithub/></a>
    </div>
    <div className='footer-copyright'>
      <small>&copy; MarcosEsteban All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer