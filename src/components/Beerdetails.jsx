

import React from "react";

const BeerDetails = ({ beer }) => {
  return (
    <div>
      <h2>{beer.name}</h2>
      <p>ABV: {beer.abv}%</p>
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerDetails;
