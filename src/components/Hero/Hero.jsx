import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'> Left side</div>
        <Header />
        <div className='right-h'> Right side</div>
    </div>
  )
}

export default Hero