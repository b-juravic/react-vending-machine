import React from 'react';
import { Link } from "react-router-dom";

function Soda() {

  return (
    <div>
      <h1>You picked soda!</h1>
      <p>
        <Link exact to="/">Go Back</Link>
      </p>
    </div>
  );
}

export default Soda;