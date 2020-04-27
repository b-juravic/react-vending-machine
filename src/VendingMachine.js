import React from 'react';
import { NavLink } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine() {

  return (

    
    <div className="vending-machine">
      <h1>This is a vending machine</h1>
      <ul>
        <li>
          <NavLink exact to="/chips">Chips</NavLink>
        </li>
        <li>
          <NavLink exact to="/soda">Soda</NavLink>
        </li>
        <li>
          <NavLink exact to="/candy">Candy</NavLink>
        </li>
      </ul>
    </div>


  )

}

export default VendingMachine;