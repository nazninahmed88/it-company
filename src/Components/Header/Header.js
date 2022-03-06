import React from 'react';
import { Link } from 'react-router-dom';

import 'animate.css';


import './Header.css'
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user , logout} = useAuth();
    return (
        <div>
           
            <nav class="navbar navbar-expand-lg bg-secondary navbar-dark   ">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <Link to='/home' className="navbar-brand"> <h5>  <span style={{fontFamily: 'Playfair Display'}} class='text fs-3 text-warning animate__animated animate__bounce'>Triple IT</span></h5> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto  mb-lg-0">
      <li className="nav-item">
         <Link className=" fs-5  color " to='/home'>Home</Link>
                                
    </li>
    <li className="nav-item">
     <Link  className=" fs-5 color " to='/about'>About</Link>
         </li>
         <li className="nav-item">
         <Link  className=" fs-5 color " to='/services'>Services</Link>
        </li>
        
        <li className="nav-item">
         <Link  className=" fs-5 color " to='/contact'>Contact</Link>
        </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-lg-0">
        {/* <select class="rounded" aria-label="Default select example">
                <option selected>English</option>
                <option value="1">English</option>
               
</select> */}
        <li className="nav-item ms-3">
        { user?.email ? 
      <button onClick={logout}>log out</button>
        :
        <Link  className=" fs-5 color" to='/login'><button className='rounded'>login</button></Link>
        }
       </li>
     
       {/* <span>{user.displayName}</span>
        {user?.email && <button onClick={logout}>log out</button>} */}
      </ul>
     
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;