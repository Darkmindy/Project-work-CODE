import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import { Pokemon } from "../types/Pokemon";

interface AddToCartContextType {
  cart: Pokemon[];
  addToCart: (pokemon: Pokemon) => void;
  removeFromCart: (index: number) => void;
  handleCheckout: () => void; // Aggiunto handleCheckout nell'interfaccia
  historyCart: number[]; // Corretto il nome della variabile historyCart
}

const AddToCartContext = createContext<AddToCartContextType | undefined>(
  undefined
);

export const useAddToCart = () => {
  const context = useContext(AddToCartContext);
  if (!context) {
    throw new Error("useAddToCart must be used within a AddToCartProvider");
  }
  return context;
};

interface AddToCartProviderProps {
  children: ReactNode;
}

export const AddToCartProvider: FC<AddToCartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Pokemon[]>([]);
  const [historyCart, setHistoryCart] = useState<number[]>([]); // Corretto il nome della variabile historyCart

  const addToCart = (pokemon: Pokemon) => {
    setCart((prevCart) => [...prevCart, pokemon]);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    // Implementazione della funzione handleCheckout
    // Esempio di implementazione:
    setHistoryCart((prevHistory) => [...prevHistory, cart.length]);
    setCart([]);
  };

  return (
    <AddToCartContext.Provider
      value={{ cart, addToCart, removeFromCart, handleCheckout, historyCart }}
    >
      {children}
    </AddToCartContext.Provider>
  );
};
