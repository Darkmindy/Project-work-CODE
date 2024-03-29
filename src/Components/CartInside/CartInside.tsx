import React from "react";
import Navbar from "../Navbar/Navbar";
import { useAddToCart } from "../../Provider/AddToCartContext";
import "./CartInside.css";

const CartInside = () => {
  const { cart, removeFromCart } = useAddToCart();

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

<<<<<<< HEAD
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
=======
const CartInside = () => {
  const { cart, removeFromCart, handleCheckout, hystoryCart} = useAddToCart();
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState<number | null>(null);

  const handleHistoryItemClick = (index: number) => {
    setSelectedHistoryIndex(index);
  };


  ;
  return (
    <>
      <Navbar />
      <h2 className='text-center m-5' style={{ fontSize: '30px', fontWeight: 'bold' }}>Cart</h2>
      <div className="d-flex ">
        <div className="d-flex">
          <div className='d-flex justify-content-start flex-column border p-3 ' style={{ width: '800px' }}>
            {cart.map((pokemon, index) => (
              <div key={index} className='d-flex align-items-center border p-5 justify-content-center'>
                <h1 className="mx-5 p-3" style={{ fontSize: '20px' }}>{pokemon.name}</h1>
                <img className='mx-5' src={pokemon.images.small} alt={pokemon.name} style={{ width: '100px' }} />
                <button onClick={() => removeFromCart(index)} className="btn btn-danger mx-5">
                  Remove
                </button>
              </div>
>>>>>>> 1765c9ea1d39e22671efafdf39b9350750fa4bb7
            ))}
          </div>
          <div className='border mx-3 d-flex flex-column  justify-content-center' style={{ width: '600px', height: '300px' }}>
            <div className='border d-flex justify-content-start p-5'>
              <h2 className='text-center m-2' style={{ fontSize: '20px', fontWeight: 'bold' }}>Riepilogo</h2>
            </div>
            <div>
              <h2 className='text-center border rounded bg-body-tertiary p-2' style={{ fontSize: '24px', fontWeight: 'bold' }}>Totale:{cart.length}€ </h2>
            </div>
            <button onClick={() => handleCheckout()} className='btn btn-primary'>Checkout</button>
              <div>
              {hystoryCart.map((item, index) => (
                <div key={index} onClick={() => handleHistoryItemClick(index)}>
                  Hai fatto un acquisto di - {item}€ il {new Date().toLocaleDateString()} alle ore {new Date().toLocaleTimeString()}
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartInside;
