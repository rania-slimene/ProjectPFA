import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProfileFour = () => {
  const navigate = useNavigate();
  
 
    const role = localStorage.getItem('role')
  
    // If the user is not a fournisseur, redirect to the login page
    if (role !== 'fournisseur') {
      navigate('/signin')
      return null
    }
  
    return (
      <div>
        <h1>Fournisseur Dashboard</h1>
        {/* Render the dashboard content for fournisseurs */}
      </div>
    )
  }
  export default ProfileFour