import React, { FC } from "react";
import "./Card.css";
import { useAddToCart } from "../../Provider/AddToCartContext";
import { Pokemon } from "../../types/Pokemon";

interface CardProps {
  pokemon: Pokemon;
}

const Card: FC<CardProps> = ({ pokemon }) => {
  const { cart, addToCart } = useAddToCart();
  const handleAddToCart = () => {
    addToCart(pokemon);
  };

  return (
    <div className="card">
      <img src={pokemon?.images?.small} alt={pokemon?.name} />
      <h3>{pokemon?.name}</h3>
      <p>{pokemon?.id}€</p>

      {cart.includes(pokemon) ? (
        <p className="text-success">Added to Cart</p>
      ) : (
        <p className="text-danger">Not Added to Cart</p>
      )}

      <button
        onClick={handleAddToCart}
        className="btn btn-warning"
        aria-label={`Add ${pokemon?.name} to Cart`}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
