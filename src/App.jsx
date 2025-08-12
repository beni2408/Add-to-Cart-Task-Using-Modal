import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards.jsx";
import { API_END_POINT, SERVER } from "./apis.js";
// import SingleCard from "./Components/SingleCard.jsx"; // not needed here

function Headerfile({ cartCount }) {
  return (
    <div className="header">
      <div>
        <h1>Add to cart Task </h1>
      </div>
      <div className="carticoncontainer">
        <i
          className="fa-solid fa-shopping-cart fa-2x"
          style={{ color: "white" }}
        ></i>
        <div className="circlevalue">
          <p>{cartCount}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [proDetails, setproDetails] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch(`${API_END_POINT}/${SERVER}`)
      .then((response) => response.json())
      .then((prodata) => setproDetails(prodata))
      .catch((err) => console.log(err));
  }, []);

  const handleCartChange = (delta) => {
    setCartCount((prev) => {
      const next = prev + delta;

      return next < 0 ? 0 : next;
    });
  };

  return (
    <>
      <Headerfile cartCount={cartCount} />
      <Cards apiparstDataprops={proDetails} onCartChange={handleCartChange} />

      {/* <AnotherPage cartCount={cartCount} /> */}
    </>
  );
}

export default App;
