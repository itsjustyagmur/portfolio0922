import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills Do I Have?</h5>
      <h2>My Experience</h2>
      <div className='container experience-container'>
        <div className='experience-front'>
<h3>Frond-End Development</h3>
<div className='experience-content'>
  <article className='details'>
  
  <h4>HTML</h4>
<small className='text-light'>experienced</small>

<h4>JavaScript</h4>
<small className='text-light'>experienced</small>

<h4>CSS</h4>
<small className='text-light'>experienced</small>

<h4>SASS</h4>
<small className='text-light'>experienced</small>

<h4>Bootstrap</h4>
<small className='text-light'>experienced</small>

<h4>React</h4>
<small className='text-light'>experienced</small>

<h4>Vue</h4>
<small className='text-light'>experienced</small>

<h4>WordPress</h4>
<small className='text-light'>experienced</small>

<h4>Illustrator</h4>
<small className='text-light'>experienced</small>

<h4>Photoshop</h4>
<small className='text-light'>experienced</small>
  </article>
</div>
        </div>
        <div className='experience-back'>
        <h3>Back-End Development</h3>
          <div className='experience-content'>
            <article className='details'>
         
            <h4>Node.Js</h4>
          <small className='text-light'>experienced</small>
        
          <h4>MongoDB</h4>
          <small className='text-light'>experienced</small>
        
          <h4>MySQL</h4>
          <small className='text-light'>experienced</small>
   
          <h4>Python</h4>
          <small className='text-light'>basic</small>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
