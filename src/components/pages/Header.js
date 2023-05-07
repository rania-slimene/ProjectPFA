import React from 'react'
import {Link} from "react-router-dom"
import './Header.css'

export default function HeaderBar() {
  return (


<header className='head1'>
<link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" ></link>
        <h2 className='hhh2'>
           <label for="nav-toggle">
            <span className="las la-bars"></span>
          </label>
          Dashboard
        </h2>
        <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" placeholder="search here"/>
        </div>
        
      </header>
      
  )
}
