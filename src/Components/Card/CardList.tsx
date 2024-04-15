import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Pokemon } from "../../types/Pokemon";

const CardList: React.FC = () => {
  const [cards, setCards] = useState<Pokemon[]>([]); // Save API call data

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.pokemontcg.io/v2/cards?pageSize=100"
        );
        if (!response.ok) {
          throw new Error("Error in request");
        }
        const data = await response.json();
        setCards(data.data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-list">
      {cards.map((pokemon: Pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default CardList;
