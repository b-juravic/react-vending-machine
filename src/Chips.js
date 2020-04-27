import React, {useState} from 'react';
import { Link } from "react-router-dom";

function Chips() {

  const [bagsEaten, setBagsEaten] = useState(0);

  const handleClick = () => {
    setBagsEaten(old=> old+1)
  }

  return (
    <div>
      <h1>You picked chips!</h1>
      <p>
        <Link exact to="/">Go Back</Link>
      </p>
    <button onClick={handleClick}>Eat another bag</button>
      <p>Bags Eaten: {bagsEaten}</p>
    </div>
  );
}

export default Chips;