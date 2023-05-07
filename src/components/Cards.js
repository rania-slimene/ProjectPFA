import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
function Cards() {
  return (
    <div className='cards'>
      <h1> LES DIFFERENTS TYPES DES SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Multimédia et informatique'
              label='developement'
              path='/services'
            />
            <CardItem
              src='images/img-5.jpg'
              text=' Entretien et réparation '
              label='Plomberie'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpg'
              text=' Entretien et réparation'
              label='Electricité'
              path='/prestataire'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Coiffure et beauté'
              label='Manucure et pédicure'
              path='/prestataire'
            />
            <CardItem
             src='images/img-8.jpg'
              text='Livraision et courses a domicile 24h/24h'
              label='Livraison'
              path='/prestataire'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='travaux ménagers et nettoyage'
              label='nettoyage'
              path='/prestataire'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Baby-sitter'
              label='Baby sitter'
              path='/prestataire'
            />
          </ul>
        </div>
      </div>
      <Link  to='/categorie'><button className='Voirplus' type="submit">Voir plus </button></Link> 
    </div>
  );
}

export default Cards;
