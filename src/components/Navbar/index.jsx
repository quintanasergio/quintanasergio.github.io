import React, { useState } from 'react'
import './style.css'
import photo from '../../assets/photo.jpg';
import burgerOpen from '../../assets/ham-menu.svg';
import burgerClose from '../../assets/ham-menu-close.svg';

let links = [
  {
    name: 'Home',
    path: '#home-section'
  },
  {
    name: 'About',
    path: '#about-section'
  },
  {
    name: 'Contact',
    path: '#contact-section'
  }
];
    
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu (){
    setMenuOpen( !menuOpen );
  };
  function scrollIntoViewWithOffset(e) {
    e.preventDefault();
    setMenuOpen( false );
    const offset = document.getElementById('navbar').offsetHeight;
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.querySelector(e.target.getAttribute("href")).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
  } 

  return (
    <div className='navbar-container'>
      <div id='navbar' className='navbar'>
        <div className='navbar-logo-container'>
          <img className='logo' src={photo} alt=''></img>
          <span className='logo-title'>Sergio Quintana</span>
        </div>
        <div className='hamburger-toggle'>
          <img src={menuOpen ? burgerClose : burgerOpen} onClick={toggleMenu} alt='burger'></img>
        </div>
        <ul className='navbar-links'>
          {
            links.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <a href={path} onClick={scrollIntoViewWithOffset}>{name}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='sm-open-navbar'>
        {menuOpen && 
          <ul>
            {
              links.map(({name, path}, index) => {
                return (
                  <li key={index}>
                    <a href={path} onClick={scrollIntoViewWithOffset}>{name}</a>
                  </li>
                )
              })
            }
          </ul>}
      </div>
    </div>
  )

  
}



export default Navbar