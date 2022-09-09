import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const headersocials = () => {
  return (
    <div className='header-socials'>
      <a href='https://linkedin.com' target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href='https://github.com' target='_blank' rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default headersocials
