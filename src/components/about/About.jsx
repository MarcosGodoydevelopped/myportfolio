import React from 'react'
import './about.css'
import ME from '../../assets/omee3.png'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3, DiJavascript1,DiReact} from 'react-icons/di'
const About = () => {
  return (
    <section id='about'>
      <h5>Developer</h5>
      <h2>Front-end</h2>
      <div className='container about-container'>
        <div className='about-me'>
        <div className='about-me-image'>
          <img src={ME} alt='Me' />
        </div>
      </div>

      <div className='about-content'>
      <div className='about-cards'>

        <article className='about-card'>
          <AiOutlineHtml5 className='about-icon'/>
          <h5>Html5</h5>
        </article>
        <article className='about-card'>
          <DiCss3 className='about-icon'/>
          <h5>Css</h5>
        </article>
        <article className='about-card'>
          <DiJavascript1 className='about-icon'/>
          <h5>Java Script</h5>
        </article>
        <article className='about-card'>
          <DiReact className='about-icon'/>
          <h5>React js</h5>
        </article>

      </div>
          <p> Soy Marcos Esteban Godoy, me especializo en tecnologias de front-end en el desarrollo web,  
            pongo mis habilidades técnicas al servicio de tus creativas ideas. 
          </p>
          <a href='#contact' className='btn btn-primary'>Contactame</a>
      </div>
      </div>
    </section>
  )
}

export default About
