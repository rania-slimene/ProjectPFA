import React, { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

 function PrivateRouteF({ path, ...props }) {
    const [ getUserType] = useState("")
    const token = localStorage.getItem('token');
    const userType = getUserType(token); // fonction qui renvoie le type d'utilisateur (client ou fournisseur) en fonction du token
  
    return userType !== 'fournisseur' ? (
      <Route path={path} {...props} />
    ) : (
      <Navigate to="/" />
    );
  }
 
export default PrivateRouteF;
  
  
  
  
  
  