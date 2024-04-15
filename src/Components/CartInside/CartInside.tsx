import React from "react";
import Navbar from "../Navbar/Navbar";
import { useAddToCart } from "../../Provider/AddToCartContext";
import "./CartInside.css";

const CartInside = () => {
  const { cart, removeFromCart, historyCart } = useAddToCart();

  // Raggruppa gli elementi nel carrello per nome e calcola il subtotale e la quantità
  const groupedCart: any[] = cart.reduce((grouped: any[], pokemon) => {
    const existingPokemon = grouped.find((item) => item.name === pokemon.name);
    if (existingPokemon) {
      existingPokemon.qty += 1;
      existingPokemon.subtotal += pokemon.price;
    } else {
      grouped.push({ ...pokemon, qty: 1, subtotal: pokemon.price });
    }
    return grouped;
  }, []);

  function handleCheckout(): void {
    // Implementa la logica per il checkout
    console.log("Esegui il checkout");
  }

  function handleHistoryItemClick(index: number): void {
    // Implementa la logica per la gestione del clic sulla cronologia degli acquisti
    console.log("Gestisci il clic sulla cronologia degli acquisti");
  }

  return (
    <>
      <Navbar />
      <div className="cart">
        <table id="shopping-cart-table" className="table">
          <caption>Prodotti nel carrello</caption>
          <thead>
            <tr>
              <th className="col img" scope="col">
                Immagine
              </th>
              <th className="col item" scope="col">
                Oggetto
              </th>
              <th className="col qty" scope="col">
                Qta'
              </th>
              <th className="col price" scope="col">
                Prezzo
              </th>
              <th className="col subtotal" scope="col">
                Subtotale
              </th>
              <th className="col action" scope="col">
                Azioni
              </th>
            </tr>
          </thead>
          <tbody>
            {groupedCart.map((pokemon: any, index: number) => (
              <tr key={index} className="cart-item">
                <td className="col img">
                  <img
                    height={200}
                    src={pokemon.images.small}
                    alt={pokemon.name}
                  />
                </td>
                <td className="col item">{pokemon.name}</td>
                <td className="col qty">{pokemon.qty}</td>
                <td className="col price">{pokemon.price} €</td>
                <td className="col subtotal">{pokemon.subtotal} €</td>
                <td className="col action">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    Rimuovi
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="border mx-3 d-flex flex-column  justify-content-center"
          style={{ width: "600px", height: "300px" }}
        >
          <div className="border d-flex justify-content-start p-5">
            <h2
              className="text-center m-2"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Riepilogo
            </h2>
          </div>
          <div>
            <h2
              className="text-center border rounded bg-body-tertiary p-2"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Totale:{cart.length}€{" "}
            </h2>
          </div>
          <button onClick={handleCheckout} className="btn btn-primary">
            Checkout
          </button>
          <div>
            {historyCart.map((item: any, index: number) => (
              <div key={index} onClick={() => handleHistoryItemClick(index)}>
                Hai fatto un acquisto di - {item}€ il{" "}
                {new Date().toLocaleDateString()} alle ore{" "}
                {new Date().toLocaleTimeString()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartInside;
