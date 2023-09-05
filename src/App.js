import React from 'react';
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import Footer from './components/Footer'

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <HomeHero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
