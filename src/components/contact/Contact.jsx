import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ros0yqk', 'template_q2rypfk', form.current, 'MWo8IqAOnPjCgkR4o')

    e.target.reset()

  };
  return (
    <section id='contact'>
      <h5>Ponerse En Contacto</h5>
      <h2>Contactame</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
<article className='contact-option'>
<MdOutlineMarkEmailUnread className='contact-option-icon'/>
  <h4 >Email</h4>

 <a href='mailto:Godoymarcosesteban@gmail.com' target='_blank'>Enviar</a> 
</article>
<article className='contact-option'>
<BsMessenger className='contact-option-icon' />
  <h4>Message</h4>
 <a href='https://m.me/MarcosestGodoy' target='_blank'>Enviar</a> 
</article>
<article className='contact-option'>
<BsWhatsapp className='contact-option-icon' />
  <h4 >WhatsApp</h4>
 <a href='https://wa.me/+5403516742030' target='_blank'>Enviar</a> 
</article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Nombre' required />
        <input type='email' name='email' placeholder='Email' required />
        <textarea name='message' rows='7' placeholder='Mensaje' required></textarea>
        <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact