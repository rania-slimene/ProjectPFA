import React from 'react'
import "./Abonemment.css"
import Footer from '../Footer'
export default function Abonemment() {
  return (
    <div>
         <h1 className='bene'>Bénéficier de toutes les opportunités</h1>
    <div className='Abon'>
       <label className='ent'> 1 MOIS   <br></br>
        30DT/Mois</label> 
      
        <ul>
       
        <li><i class="fab fa-angellist" /> Communication instantanée et illimitée avec les clients</li>
        <li><i class="fab fa-angellist"/> Appels en quantité illimitée</li>
        <li><i class="fab fa-angellist"/> Accès illimité à des avantages promotionnels</li>
       <li><i class="fab fa-angellist"/> Accès illimité à la publication des clients</li> 
        <li><i class="fab fa-angellist"/> Exposition client 30KM au lient de 8 KM</li>
        <li> <i class="fab fa-angellist"/> Pas d'un mois gratuit </li>
        <button type='submit' className='buAbon'>S'abonner</button>
        </ul>
        </div>   
        <div className='Abon'>
     
        <label className='ent'>3 MOIS  <br></br>
       25DT/Mois</label> 
        
        <ul>
        <li><i class="fab fa-angellist"/> Un Mois Gratuit</li>
        <li><i class="fab fa-angellist"/> Communication instantanée et illimitée avec les clients</li>
        <li><i class="fab fa-angellist"/> Appels en quantité illimitée</li>
        <li><i class="fab fa-angellist"/> Accès illimité à des avantages promotionnels</li>
       <li><i class="fab fa-angellist"/> Accès illimité à la publication des clients</li> 
        <li> <i class="fab fa-angellist"/> Exposition client 30KM au lient de 8 KM</li>
        <button  type='submit' className='buAbon'>S'abonner</button>
        </ul>
        </div>  
        <div className='Abon'>
       
        <label className='ent'>12 MOIS  <br></br>
      18DT/Mois</label> 
        <ul>
        <li > <i class="fab fa-angellist"/> Un Mois Gratuit</li>
        <li > <i class="fab fa-angellist"/> Communication instantanée et illimitée avec les clients</li>
        <li> <i class="fab fa-angellist"/>  Appels en quantité illimitée</li>
        <li> <i class="fab fa-angellist"/>  Accès illimité à des avantages promotionnels</li>
       <li> <i class="fab fa-angellist"/>   Accès illimité à la publication des clients</li> 
        <li><i class="fab fa-angellist"/>   Exposition client 30KM au lient de 8 KM</li>
        <button  type='submit' className='buAbon'>S'abonner</button>
        </ul>
        </div>  
        <div className='Abon'>
        
        <label className='ent'>6 MOIS  <br></br>
       20DT/Mois</label> 
        <ul>
        <li><i class="fab fa-angellist"/>  un Mois Gratuit</li>
        <li><i class="fab fa-angellist"/>  Communication instantanée et illimitée avec les clients</li>
        <li><i class="fab fa-angellist"/>  Appels en quantité illimitée</li>
        <li><i class="fab fa-angellist"/>  Accès illimité à des avantages promotionnels</li>
       <li> <i class="fab fa-angellist"/>  Accès illimité à la publication des clients</li> 
        <li> <i class="fab fa-angellist"/> Exposition client 30KM au lient de 8 KM</li>
        <button  type='submit' className='buAbon'>S'abonner</button>
        </ul>
        </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


        <Footer/> 
    </div>
  )
}
