import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
// import "../App.css";
// import css from "@mui/material";

function SingleCard({ carddetails }) {
  return (
    <div>
      <div className="card">
        <img className="imageincard" src={carddetails.image} alt="" />
        <div className="cardcontainer2">
          <p className="protitle">{carddetails.title}</p>
        </div>

        <p className="carddescription">{carddetails.description}</p>
        <p className="cardcategory"> Category : {carddetails.category}</p>
        <p className="cardprice"> ${carddetails.price}</p>
        <p className="cardrating"> Rating: {carddetails.rating?.rate}</p>
        <p className="cardrating">{carddetails.rating?.count} left</p>
        <div className="cardrating"></div>
        <div className="cardbuttoncontainer">
          <i
            className="fa-solid fa-shopping-cart fa-lg"
            style={{
              color: "white",
            }}
          ></i>
          <button className="cardbutton">Add to Cart</button>
        </div>
      </div>
    </div>
    // <Box>
    //   <Paper
    //     // className="wholepage"
    //     elevation={3}
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       cursor: "pointer",
    //       height: "600px",
    //       width: "300px",
    //       padding: "20px",
    //     }}
    //   >
    //     <Stack spacing={4}>
    //       <Paper elevation={3} sx={{ padding: "10px" }}>
    //         <img
    //           src={carddetails.image}
    //           alt={carddetails.title}
    //           style={{ width: "150px", height: "auto" }}
    //         />
    //         <Typography
    //           style={{
    //             fontSize: "20px",
    //           }}
    //         >
    //           {carddetails.title}
    //         </Typography>
    //         <Typography
    //           style={{
    //             fontSize: "8px",
    //           }}
    //         >
    //           {carddetails.description}
    //         </Typography>
    //       </Paper>
    //       <Box>
    //         <Typography> {carddetails.category}</Typography>
    //         <Typography>Price: ${carddetails.price}</Typography>
    //         <Typography> Rating: {carddetails.rating?.rate}</Typography>
    //         <Typography>Count: {carddetails.rating?.count}</Typography>
    //       </Box>
    //     </Stack>
    //   </Paper>
    // </Box>
  );
}

export default SingleCard;
