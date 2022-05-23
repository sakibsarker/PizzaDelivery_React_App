import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar=()=>{
return(
    <nav className='navbar'>
        <NavLink className='nav-link' to="/">Home</NavLink>
        <NavLink className='nav-link' to="/Contact">Contact</NavLink>
        <NavLink className='nav-link' to="/Blog">Blog</NavLink>
    </nav>
);
}
export default Navbar
