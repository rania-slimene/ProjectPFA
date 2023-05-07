import React, { useState } from 'react';
import axios from 'axios';
import "./SingIn.css"
import Footer from '../Footer'


import {  useNavigate } from "react-router-dom";



// dans votre fonction de connexion, une fois que l'utilisateur est authentifié et que vous avez récupéré son rôle depuis votre backend, vous pouvez utiliser la fonction getDashboardPath pour rediriger l'utilisateur vers son dashboard approprié

function SignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", motDePasse: "" })
  const [role, setRole] = useState("client");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
    console.log(user);
  }
  const handleSubmit = e => {
    e.preventDefault()
    setFormErrors(validate(user));
    setIsSubmit(true);
  }
  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email)) {
      errors.email = "Ce n'est pas email valide"
    }
    if (values.motDePasse.length < 4) {
      errors.motDePasse = "le mot de passe doit comporter plus de 4 caractères"
    }
    return errors;


  }
  const login = () => {
    if (Object.keys(formErrors).length === 0 & isSubmit) {
      if (role === "fournisseur") {
        axios.post("http://localhost:5000/fournisseur/signin", user)
          .then(res => {
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('role', 'fournisseur')
            navigate(axios.post(""));
            alert(res.data.message)
          });
      } else {
        axios.post("http://localhost:5000/client/signin", user)
          .then(res => {
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', 'client')
            navigate("/clientDashBorad");
            alert(res.data.message)
          });
      }
    }
  }

  return (
    <>
    <div className="hh4">Connexion</div>
    <div class="container-login">
      <div class="thumbnail"></div>
      <form onSubmit={handleSubmit}>
        <div class="row">
          

          <div class="input-group input-group-icon">
            <input type="email"
              placeholder="Adresse email"
              name="email"
              value={user.email} onChange={handleChange}
              required
            />
            <div class="input-icon1"><i class="fa fa-envelope"></i>
              <p>{formErrors.email}</p>
            </div>
          </div>
          <div class="input-group input-group-icon">
            <input type="password" placeholder="Mot de passe"
              name="motDePasse"
              value={user.motDePasse}
              onChange={handleChange}
              required
            />
            <div class="input-icon1"><i class="fa fa-key"></i>
            </div>
            <p>{formErrors.motDePasse}</p>

          </div>
          <div class="input-group">
            <input id="fournisseur" type="radio" value={"fournisseur"} onChange={(e) => setRole(e.currentTarget.value)} checked={role === "fournisseur"} />
            <label for="fournisseur">Fournisseur</label>
            <input id="prestataire" type="radio" value={"client"} checked={role === "client"} onChange={(e) => setRole(e.currentTarget.value)} />
            <label for="client">Client</label>
          </div>

       
          <button  class="button-login"type="submit" onClick={login} >Connexion</button>
        
             
          <div class="footer-link ">
            <span className="span1">Vous etes dejà memebre? <a href="/sign-up" className="a1">Inscription</a></span>
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

export default SignIn ;
