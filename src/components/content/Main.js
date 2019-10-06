import React from "react";

import Example from "../layout/Example";

// Bootstrap
import CardDeck from "react-bootstrap/CardDeck";

// import Tableau Visualisations
import tableauVisualisations from "../helper/Visualisations";

function Main({ user }) {
  console.log(user);
  return (
    <div>
      <h1 className="py-2">Welcome back {user ? <mark>{user.name}</mark> : ""}</h1>
      <h3 className="py-5">Explore the visualisations below...</h3>
      <CardDeck>
        {tableauVisualisations.map((viz, i) => (
          <Example key={i} viz={viz} />
        ))}
      </CardDeck>
    </div>
  );
}

export default Main;
