import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocials from './Headersocials'

const Header = () => {
  return (
    <header id='header'>
      <div className='container, header__container'>
<h5>Hello I'm</h5>
<h1>Yagmur Guzeldereli</h1>
<h5 className='text-light'>Web Developer</h5>
<CTA/>
<a href="#contact" className='scroll-down'>Scroll Down</a>
<Headersocials/>
      </div>
    </header>
  )
}

export default Header
