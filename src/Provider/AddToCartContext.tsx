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
  handleCheckout: () => void;
  historyCart: number[]; // Corretto da 'hystoryCart' a 'historyCart'
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
  const [historyCart, setHistoryCart] = useState<number[]>([]); // Corretto da 'hystoryCart' a 'historyCart'

  const addToCart = (pokemon: Pokemon) => {
    setCart((prevCart) => [...prevCart, pokemon]);
  };

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleCheckout = () => {
    setCart([]);

    if (cart.length > 0) {
      setHistoryCart((prevHistory) => [...prevHistory, cart.length]);
      setCart([]);
    }
  };

  return (
    <AddToCartContext.Provider
      value={{ cart, addToCart, removeFromCart, handleCheckout, historyCart }}
    >
      {" "}
      {/* Corretto da 'hystoryCart' a 'historyCart' */}
      {children}
    </AddToCartContext.Provider>
  );
};
