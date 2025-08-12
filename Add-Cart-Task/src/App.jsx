import React, { useEffect, useState } from "react";
import "./App.css";

import Cards from "./Components/Cards.jsx";
import { API_END_POINT, SERVER } from "./apis.js";
import SingleCard from "./Components/SingleCard.jsx";
function App() {
  const [proDetails, setproDetails] = useState([]);
  // const [Error, setError] = useState();

  useEffect(() => {
    fetch(`${API_END_POINT}/${SERVER}`)
      .then((response) => response.json())
      .then((prodata) => setproDetails(prodata))
      .catch((err) => console.log(err));
  }, []);

  return (
    // <div className="wholepage">

    <Cards apiparstDataprops={proDetails} />
    // </div>
  );
}

export default App;

// function Card() {
//   return (
//     <>
//       <div className="card">
//         {/* <img src="#" alt="" /> */}
//         <h1>Name</h1>
//         <button>Add to Cart</button>
//       </div>
//     </>
//   );
// }

//

//

//chatgpt model -

// const [products, setProducts] = useState([]);
// const [cartItems, setCartItems] = useState([]);
// const [showModal, setShowModal] = useState(false);

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => setProducts(data));
// }, []);

// const addToCart = (product) => {
//   const alreadyInCart = cartItems.find((item) => item.id === product.id);
//   if (alreadyInCart) {
//     alert("Item already added to the cart");
//   } else {
//     setCartItems([...cartItems, product]);
//   }
// };

// const removeFromCart = (id) => {
//   const updatedCart = cartItems.filter((item) => item.id !== id);
//   setCartItems(updatedCart);
// };

// return (
//   <div className="container">
//     {/* Navbar */}
//     <div className="navbar">
//       <h1>Fake Store</h1>
//       <button className="cart-btn" onClick={() => setShowModal(true)}>
//         Cart ({cartItems.length})
//       </button>
//     </div>

//     {/* Product List */}
//     <div className="products">
//       {products.map((product) => (
//         <div className="product-card" key={product.id}>
//           <img src={product.image} alt={product.title} />
//           <h3>{product.title}</h3>
//           <p>${product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>

//     {/* Modal */}
//     {showModal && (
//       <div className="modal-overlay">
//         <div className="modal">
//           <div className="modal-header">
//             <h2>Cart Items</h2>
//             <button className="close-btn" onClick={() => setShowModal(false)}>
//               ✕
//             </button>
//           </div>
//           {cartItems.length === 0 ? (
//             <p>No items in cart.</p>
//           ) : (
//             <div className="cart-items">
//               {cartItems.map((item) => (
//                 <div className="cart-item" key={item.id}>
//                   <img src={item.image} alt={item.title} />
//                   <div>
//                     <h4>{item.title}</h4>
//                     <p>${item.price}</p>
//                   </div>
//                   <button onClick={() => removeFromCart(item.id)}>
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     )}
//   </div>
// );
