import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/crypto.png'
import IMG2 from '../../assets/weather.png'
const data = [
  {
    id:1,
    image:IMG1,
    title:'World Crypto',
    github:'https://github.com/MarcosGodoydevelopped/worldcrypto/',
    demo:'https://marcosgodoydevelopped.github.io/worldcrypto/'
  },
  {
    id: 2,
    image:IMG2 ,
    title:'weather',
    github:'https://github.com/MarcosGodoydevelopped/Weather-app',
    demo:'https://marcosgodoydevelopped.github.io/Weather-app/'
  }
 
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>Mi Trabajo Reciente</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio-container'>
    {
      data.map(({id, image, title,github, demo}) =>{
        return(
        <article key={id} className='portfolio-item'>
      <div className='portfolio-item-image'>
      <img src={image} alt={title} />
      </div>
        <h3>{title}</h3>
      <div className='portfolio-item-cta'>
      <a href={github} className='btn'>Github</a>
      <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
        </div>
        </article>
        )
      })
}
</div>
    </section>
  ) 
}
  
export default Portfolio