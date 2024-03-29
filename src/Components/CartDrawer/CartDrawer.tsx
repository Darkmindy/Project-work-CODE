import React from "react";
import "./CartDrawer.css";
import { useAddToCart } from "../../Provider/AddToCartContext";

const CartDrawer = () => {
  const { cart, removeFromCart } = useAddToCart();

  return (
    <div className="cart-drawer">
      <div className="cart-drawer-content">
        <h2>Cart</h2>
        <div className="card-drawer">
          {cart.map((pokemon, index) => (
            <div key={index} className="card-inside">
              <h3>{pokemon.name}</h3>
              <img src={pokemon.images.small} alt={pokemon.name} />
              <button
                onClick={() => removeFromCart(index)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
