import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-6.mp4' autoPlay loop muted />
      <h1>BIENVENUE SUR NOTRE SITE WEB</h1>
      <p>OTLOBNI quand vous avez besoin d'un service </p>
      <div className='hero-btns'>
        <Link to ="/sign-up">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          COMMENCER
        </Button>
        </Link>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          REGARDE LA BANDE-ANNONCE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
