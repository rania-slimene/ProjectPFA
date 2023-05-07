
import React, { useState, useEffect, useRef } from "react";
import axios from "axios"
import Footer from '../Footer'
import './signup.css';
import 'font-awesome/css/font-awesome.min.css';

//import { Elements } from '@stripe/react-stripe-js';

//const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');
//import { loadStripe } from '@stripe/stripe-js';
//import { CardElement,useStripe, useElements } from '@stripe/react-stripe-js';


//const stripePromise = loadStripe('sk_test_51N1HHhAGAeD7MOq0ZVE2GVeXptT21TmVeRk39unQfSOyAVCuk6oNSlrtnce3OUL3oXgBEye4vvY5F5wzyjl25Yfo00K60Eec7q');


const SignUp = () => {

  //const stripe = useStripe();
 // const elements = useElements();
  //const [selectedPlan, setSelectedPlan] = useState('');
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    login: "",
    motDePasse: "",
    ncin: "",
    nTel: "",
    email: "",
    localisation:"",
    reEnterPassword: "",
    photo:null
   
  })

 // const [fichier,setFichier]=useState(null);

 

  const [type, setType] = useState("client");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const userFile=useRef(null);
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'photo') {
      setUser({ ...user, [name]: e.target.files[0] });
    } else {
      setUser({ ...user, [name]: value });
    }
}
console.log(userFile.current);
  const handleSubmit = async (e) => { 
    e.preventDefault()
     setFormErrors(validate(user));
  setIsSubmit(true);
  console.log(e);
  }
useEffect(()=>{
  console.log(user);
},[user])

useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 & isSubmit) {
      console.log(user);
    }
  })
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Champ obligatoire";
    } else if (!regex.test(values.email)) {
      errors.email = "Ce n'est pas email valide"
    }
  
    if (values.motDePasse.length < 4) {
      errors.motDePasse = "le mot de passe doit comporter plus de 4 caractères"
    } else if (values.motDePasse !== values.reEnterPassword) {
      errors.motDePasse = "votre mot de passe et confirmer mot de passe  ne correspondent pas "
    }
   
    if (values.motDePasse !== values.reEnterPassword) {
      errors.reEnterPassword = "votre mot de passe et confirmer mot de passe  ne correspondent pas "
    }
    
    return errors;


  }
  const register =()=> {
  
    
    
    if (Object.keys(formErrors).length === 0 & isSubmit) {
      const formData = new FormData();
      for (const key in user) {
        formData.append(key, user[key]);
      }
      }
      if (type === "fournisseur") {
        const { nom, prenom, login, motDePasse,  nTel, email,localisation, photo,specialite, reEnterPassword } = user
        if (nom && prenom && login && motDePasse &&  nTel && email && specialite && localisation && photo &&  reEnterPassword && (motDePasse === reEnterPassword)) {
          axios.post("http://localhost:5000/fournisseur/signup", user)
            .then(res => {
              alert(res.data.message)

            })

        } else {
          alert("invalid input")
        }
      }
      else {
        const { nom, prenom, login, motDePasse, nTel, email, ville,codePostal,localisation,photo, reEnterPassword } = user
        if (nom && prenom && login && motDePasse && nTel && email && ville  && localisation && photo && codePostal && reEnterPassword && (motDePasse === reEnterPassword)) {
          axios.post("http://localhost:5000/client/signup", user)
            .then(res => {
              alert(res.data.message)
              
             
            })

        } else {
          alert("invalid input")
        }
      }
    }

  

  return (
    <>
    <div className="hh4">Créer compte</div>
    <div class="container-signup" >
      <form onSubmit={handleSubmit } enctype="multipart/form-data">
        <div class="row">
       
     
          <div class="onerow">
       <div class="input-group input-group-icon">

              <input
                type="text"
                placeholder="Nom"
                name="nom"
                required
                onChange={handleChange}
                value={user.nom}
              />
              <div class="input-icon"><i class="fa fa-user"></i></div>

            </div>
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Prénom"
                name="prenom"
                value={user.prenom}
                onChange={handleChange}
                required
              />
            </div>
            
          </div>
          <div class="input-group input-group-icon">
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              name="login"
              value={user.login}
              onChange={handleChange}
              required
            />
            <div class="input-icon"><i class="fa fa-user"></i></div>
          </div>
          <div class="input-group input-group-icon">
            <input
              type="email"
              placeholder="Adresse email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <div class="input-icon"><i class="fa fa-envelope"></i></div>
            <p>{formErrors.email}</p>
          </div>
          <div class="onerow">
            
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Téléphone "
                name="nTel"
                value={user.nTel}
                onChange={handleChange}
                required
              />
              <div class="input-icon"><i class="fa fa-phone"></i></div>
            </div>
          </div>

          <div class="input-group input-group-icon">
            <input
              type="password"
              name="motDePasse"
              placeholder="Mot de passe"
              value={user.motDePasse}
              onChange={handleChange}
              required
            />
            <div class="input-icon"><i class="fa fa-key"></i></div>
            <p>{formErrors.motDePasse}</p>
          </div>
          <div class="input-group input-group-icon">
            <input
              type="password"
              name="reEnterPassword"
              placeholder="Confirmer mot de passe"
              value={user.reEnterPassword}
              onChange={handleChange}
              required
            />
            <div class="input-icon">
              <i class="fa fa-check"></i>
            </div>
            <p>{formErrors.reEnterPassword}</p>
          </div>
          <div class="input-group input-group-icon">
            <input
              type="text"
              name="localisation"
              placeholder="Localisation"
              value={user.localisation}
              onChange={handleChange}
              required
            />
            <div class="input-icon">
              <i class="fa fa-home"></i>
            </div>
            </div>
          <div class="input-group">
            <input id="fournisseur" type="radio" value={"fournisseur"} onChange={(e) => setType(e.currentTarget.value)} checked={type === "fournisseur"} />
            <label for="fournisseur">Fournisseur</label>
            <input id="client" type="radio" value={"client"} checked={type === "client"} onChange={(e) => setType(e.currentTarget.value)} />
            <label for="client">Client</label>
          </div>
          {type === "fournisseur" && (
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Spécialité"
                name="specialite"
                value={user.specialite}
                onChange={handleChange}
                required
              />
              <div class="input-icon"><i class="fa fa-book"></i>
            </div>
            </div>
          )}
          {type === "client" && (
            <>
            <div class="input-group input-group-icon">
            <input
              type="text"
              placeholder="Ville"
              name="ville"
              value={user.ville}
              onChange={handleChange}
              required
            />
            <div class="input-icon">
              <i class="fa fa-location-arrow"></i>            
            </div>
          </div> 

          <div class="input-group input-group-icon">
          <input
            type="text"
            placeholder="Code postal"
            name="codePostal"
            value={user.codePostal}
            onChange={handleChange}
            required
          />
          <div class="input-icon"><i class="fa fa-users"></i>
          </div>
          </div>
          
           </>
          )}
         
         
         
          <button class="button-signup" type="submit" onClick={register} >Enregistrer</button>
          <div class="footer-link ">
            <span className="span1">Vous etes dejà memebre? <a href="/sign-in" className="a1">Connexion</a></span>
            </div>
        </div>


      </form>
    </div>
    <br/>
    <br/>
    <Footer/>
    </>
  );
}
export default SignUp