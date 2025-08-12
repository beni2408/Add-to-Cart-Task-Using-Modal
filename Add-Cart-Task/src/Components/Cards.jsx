import React from "react";
// import { Typography } from "@mui/material";
// import "../App.css";
import SingleCard from "./SingleCard";

function Cards({ apiparstDataprops }) {
  return (
    <div className="allcards">
      {apiparstDataprops?.map((details) => (
        <SingleCard carddetails={details} key={details.idx} />
      ))}
    </div>
  );
}
export default Cards;
