import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='footer-subscription-heading'>
        Rejoignez notre site pour recevoir nos meilleures offres de services


        </div>
        <div className='footer-subscription-text'>
        Vous pouvez vous désabonner à tout moment.
        </div >
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>S'abonner</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>À propos </h2>
            <a href='/propos/qui_nous_somme'>Qui somme_nous?</a>
            < a href='/propos/qui_nous_somme'>Notre mission </a>
          </div>                                            
          <div class='footer-link-items'>
            <h2>Contact </h2>
            <Link to='/'>Numero telephone:  +216 95289756</Link>
            <Link to='/'>Numero fixe:   <br></br>+216 73515520 </Link>
            <Link to='/'>Adresse_email: otlobni@gmail.com</Link>
            <Link to='/'>Locale :Rue 18 Janvier Monastir </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Pour Les Prestataires</h2>
            <a href='/abonemments'>Nos abonnements</a>
            <a href='/chart'>Charte comportementale</a>
          </div>
          <div class='footer-link-items'>
            <h2>Resaux sociaux</h2>
            <a href='https://www.instagram.com/otlobni_/'>Instagram</a>
            <a href='https://www.facebook.com/otlo.bni.9'>Facebook</a>
            <a href='https://www.linkedin.com/in/rania-slimene-35a6a7213/'>LinkedIn</a>
            <a href='https://www.facebook.com/ranoucha.rania.140'>Twitter</a>
            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              OTLOBNI
              <i class='fab fa-whatsapp' />
            </Link>
          </div>
          <small class='website-rights'>OTLOBNI © 2023</small>
          <div class='social-icons'>
            <a href='https://www.facebook.com/otlo.bni.9'
              class='social-icon-link facebook'
              
              
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a href='https://www.instagram.com/otlobni_/'
              class='social-icon-link instagram'
              
              
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a href='https://www.linkedin.com/in/rania-slimene-35a6a7213/'
              class='social-icon-link youtube'
              
              
              aria-label='Youtube'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a href='https://www.linkedin.com/in/rania-slimene-35a6a7213/'
              class='social-icon-link twitter'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
