import React from 'react'
import './portfolio.css'
import book from '../../assets/bookclub.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Few Things I worked On</h5>
      <h2>Portfolio</h2>
      <div className='left'>
       <div className="container portcontainer">
       <article className="item">
        <img src="https://github.com/itsjustyagmur/react-portfolio/blob/gh-pages/assets/evil.png?raw=true" className='pics' alt=""/>
        <h3>Evil Eye</h3>
        <div className='item-cta'>
        <a href="https://itsjustyagmur.github.io/evileye/" className='btn btn-primary'>Demo</a>
        </div>
      </article>
      <article className="item">
          <img src={book} className='pics' alt=""/>
          <h3>BookClub</h3>
          <div className='item-cta'>
          <a href="https://bookclubchicago.wordpress.com/" className='btn btn-primary'>Demo</a>
          </div>
        </article>
        <article className="item">
          <img src="https://github.com/itsjustyagmur/react-portfolio/blob/main/public/assets/broadway.png?raw=true" className='pics' alt=""/>
          <h3>Broadway</h3>
          <div className='item-cta'>
          <a href="https://itsjustyagmur.github.io/broadwaywebsite/" className='btn btn-primary'>Demo</a>
       </div>
        </article>
        <article className="item">
          <img src="https://github.com/itsjustyagmur/react-portfolio/blob/main/public/assets/morroco.png?raw=true/morroco.png" className='pics' alt=""/>
          <h3>Morocco</h3>
          <div className='item-cta'>
          <a href="https://itsjustyagmur.github.io/Morocco/" className='btn btn-primary'>Demo</a>
        </div>
        </article>
        <article className="item">
          <img src="https://github.com/itsjustyagmur/react-portfolio/blob/main/public/assets/classvue.png?raw=true" className='pics' alt=""/>
          <h3>Class Vue</h3>
          <div className='item-cta'>
          <a href="https://boiling-earth-60678.herokuapp.com/" className='btn btn-primary'>Demo</a>
        </div>
        </article>
        <article className="item">
            <img src="https://github.com/itsjustyagmur/react-portfolio/blob/main/public/assets/clock.png?raw=true" className='pics' alt=""/>
            <h3>Clock</h3>
            <div className='item-cta'>
            <a href="https://itsjustyagmur.github.io/javaclock/" className='btn btn-primary'>Demo</a>
            </div>
          </article>
       
       </div>
      
       </div>
    </section>
  )
}

export default Portfolio
