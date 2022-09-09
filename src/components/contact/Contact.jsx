import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div id="con" className='container contact-container'>
<div className='contact-options'>
  <article className='contact-option'>
  <MdEmail/>
<h4>Email</h4>
<h5>yguzeldereli@gmail.com</h5>
<a href='mailto:yguzeldereli@gmail.com' target="_blank" rel="noreferrer" >Send a Message</a>
  </article>
</div>
    </div>
    </section>
  )
}

export default Contact