import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  return (
          <nav className="navbar">
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/soda">Soda</NavLink>
            <NavLink exact to="/candy">Candy</NavLink>
          </nav>
  )
 
}

export default NavBar;