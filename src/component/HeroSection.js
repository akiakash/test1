import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    
    <div className='hero-container'>
       <img className='side-image' src='Vector.png' alt=''></img>
      <div className='heading'>
      <h1>We are excited<br></br>
      to work with you</h1>
      </div>  
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          BOOK NOW
        </Button>     
        </div>
        <img className='image1' src='image1.png' alt=''></img>     
    </div>
    
    
  );
}

export default HeroSection;