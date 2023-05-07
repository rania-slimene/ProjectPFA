import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Services from './components/pages/Services';
import Prestataire from './components/pages/Prestataire';
import SignUp from './components/pages/SignUp';
import Promo from './components/pages/Promo';
import Chart from './components/pages/Chart';
import QuiNousSomme from './components/pages/QuiNousSomme';
import Abonemment from './components/pages/Abonemment';
import  SignIn from './components/pages/SignIn'
import Profile from './components/pages/ProfileClient';
import ProfileF from './components/pages/ProfileFour'
import DashboradClient from './components/pages/ProfileClient';
import Footer from './components/Footer';
import Categories from './components/pages/Categories';
//import ClientDash from './components/pages/client/clientDash'



function App() {
  return (
    <>
   
      <Router>
      
        
        <Routes>
       
          <Route path='/' exact element={
            <>
          <Navbar />
          <Home/>
          
          </>} />
          <Route path='/categorie' exact element={
            <>
          <Navbar />
          <Categories/>
          <Footer/>
          
          </>} />
          <Route path='/services' element={
           <>
           <Navbar />
           
           <Services/>
           </>
          } />
          <Route path='/Prestataire' element={
          
          <> 
          <Navbar/>
          <Prestataire/>
          <Footer/>
          </>} />
          <Route path='/promo' element={<><Promo/>  <Navbar/></>} />
          <Route path='/sign-up' element={<> <Navbar/><SignUp/> </>} />
          <Route path='/chart' element={<><Navbar/><Chart/>  </>}/>
          <Route path='/sign-in' element={<><Navbar/><SignIn/>  </>} />
          <Route path='/propos/qui_nous_somme' element={<><Navbar/><QuiNousSomme/> </>}/>
          <Route path='/abonemments'element={<><Navbar/><Abonemment/> </>}/>
          <Route path='/fournisseurDashBorad' element={()=><ProfileF />}/>
          <Route path='/clientDashBorad' element={<DashboradClient />}/>
          
         
        
        </Routes>
        
      </Router>
     
    </>
  );
}

export default App;
