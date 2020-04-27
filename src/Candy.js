import React from 'react';
import { Link } from "react-router-dom";

function Candy() {

  return (
    <div>
      <h1>You picked candy!</h1>
      <p>
        <Link exact to="/">Go Back</Link>
      </p>
    </div>
  );
}

export default Candy;