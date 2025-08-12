import React from "react";
import SingleCard from "./SingleCard";

function Cards({ apiparstDataprops, onCartChange }) {
  return (
    <div className="allcards">
      {apiparstDataprops.map((carddetails) => (
        <SingleCard
          key={carddetails.id}
          carddetails={carddetails}
          onCartChange={onCartChange} // <<— pass handler down
        />
      ))}
    </div>
  );
}

export default Cards;
