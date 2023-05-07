import React , {useEffect}from 'react';
import '../../App.css';
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import './prestataire.css'
export default function Prestataire() {
  const [Prestataire,setPrestataire]=React.useState([])
  const location=useLocation()
  useEffect(()=>{
    
     if(location.pathname==='/Prestataire'){
        axios.get("http://localhost:5000/fournisseur/").then(res=>{
            //console.log(res.data)
            setPrestataire(res.data)

        }
        )
      }
    }
  )
      return (
        <>
  {Prestataire === [] ? (
    <>loading...</>
  ) : (
    Prestataire.map((item) => (
      <div className="cardess">
        <div className="name">
         <p> {item.photo}</p>
          <p className="cards12">{item.nom}</p>
        </div>
        <div className='carrds'>
        <div className="name">
          <h5>nom : </h5>
          <p className="cards12">{item.nom}</p>
        </div>

        <div className="name">
           <h5>prenom : </h5>
        <p className="cards12">{item.prenom}</p>
        </div>
        <div className="name"><h5>specialite: </h5>
        <p className="cards12">{item.specialite}</p>
        </div>
        <div className="name">
           <h5>localisation: </h5>
        <p className="cards12">{item.localisation}</p>
         </div>
        </div>
        <button  type='submit'> Voir Plus </button>
      </div>
    ))
  )}
</>
      );
    
    }  
  
