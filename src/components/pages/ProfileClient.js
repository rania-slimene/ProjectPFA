import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import SidBar from './SidBar'
const Profile = () => {
  const navigate = useNavigate();
  
 
    const role = localStorage.getItem('role')
  
    // If the user is not a fournisseur, redirect to the login page
    if (role !== 'client') {
      navigate('/signin')
      return null
    }
  
    return (
      <div>
        <Header/>
        <SidBar/>
        {/* Render the dashboard content for fournisseurs */}
      </div>
    )
  }
  export default Profile