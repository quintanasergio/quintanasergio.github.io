import React from 'react'
import './style.css'

const HomeHero = () => {
  return (
    <div id="home-section" className='home-hero-container'>
        <div className="home-hero-content">
            <h1>Hey, I'm Sergio Quintana</h1>
            <h2>Empowering Digital Experiences as a Full Stack Developer, Crafting Salesforce Solutions and Beyond for Seamless Web Applications.</h2>
        </div>
        <div className="scroll-downs">
            <div className="mousey">
                <div className="scroller"></div>
            </div>
        </div>
    </div>
  )
}

export default HomeHero