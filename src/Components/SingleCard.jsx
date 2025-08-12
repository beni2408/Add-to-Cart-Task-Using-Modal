import React, { useState } from "react";

function SingleCard({ carddetails, onCartChange }) {
  const [clicked, setClicked] = useState(false); // false = Add to Cart

  const handleClick = () => {
    const newClicked = !clicked;
    setClicked(newClicked);

    if (typeof onCartChange === "function") {
      onCartChange(newClicked ? 1 : -1);
    }
  };

  return (
    <div className="card">
      <img className="imageincard" src={carddetails.image} alt="" />
      <p className="protitle">{carddetails.title}</p>
      <p className="carddescription">{carddetails.description}</p>
      <p className="cardcategory">Category: {carddetails.category}</p>
      <p className="cardprice">${carddetails.price} </p>
      <p className="cardrating">Rating: {carddetails.rating?.rate}</p>
      <p
        style={{
          color: "red",
        }}
        className="cardrating"
      >
        {" "}
        only {carddetails.rating?.count} left!
      </p>

      <div className="cardbuttoncontainer">
        <i
          className="fa-solid fa-shopping-cart fa-lg"
          style={{ color: clicked ? "gray" : "white" }}
        ></i>

        <button className="cardbutton" onClick={handleClick}>
          <p style={{ color: clicked ? "gray" : "white" }}>
            {clicked ? "Remove from Cart" : "Add to Cart"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default SingleCard;
