import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useAddToCart } from "../../Provider/AddToCartContext";

const Cart = () => {
  const { cart } = useAddToCart();

  // Calcola la quantità totale di tutti i prodotti nel carrello
  const calculateTotalQuantity = () => {
    const quantityMap = new Map();
    cart.forEach((item) => {
      const { name } = item;
      quantityMap.set(name, (quantityMap.get(name) || 0) + 1);
    });
    return [...quantityMap.values()].reduce((acc, cur) => acc + cur, 0);
  };

  return (
    <div className="cart-wrapper mx-5">
      <Link to="/cart-inside">
        <i className="ri-shopping-cart-line cart"></i>
      </Link>
      <div className="cart-container_tot">{calculateTotalQuantity()}</div>
    </div>
  );
};

export default Cart;
