import React from 'react'
import './about.css'
import Compt from '../../assets/compt.jpg'
import {FaAward} from "react-icons/fa"
import {BsFiles} from "react-icons/bs"
const About = () => {
  return (
    <section id='about'>
<h5>Get to Know</h5>
<h2>About Me</h2>
<div className='container, about-container'>
  <div className='about-me'>
    <div className='about-img'>
      <img src={Compt} alt="" />
    </div>
  </div>
  <div className='about-content'>
<div className='about-cards'>
  <article className='about-card'>
  <FaAward className='about-icon'/>
    <h5>Experience</h5>
    <small>3+ Years</small>
  </article>
  <article className='about-card'>
  <BsFiles className='about-icon'/>
    <h5>Projects</h5>
    <small>50+ completed</small>
  </article>
</div>
<p> Creative and dependable Web Developer with a stellar customer
   service record and superb work ethic. Self-motivated individual
    who enjoys constant learning and passion for responsive website design.
     Extremely passionate towards software architecture and design 
     combined with sensitivity to serve the needs of the business 
     balanced with the delivery of high-quality solutions.</p>
    <a href='#contact' className='btn btn-primary'>Lets Talk</a>
  </div>
</div>
</section>
  )
}

export default About