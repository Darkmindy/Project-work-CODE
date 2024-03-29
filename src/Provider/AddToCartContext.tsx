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
  hystoryCart: number[];

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
  const [hystoryCart, setHystoryCart] = useState<number[]>([]);
  const addToCart = (pokemon: Pokemon) => {
    setCart((prevCart) => [...prevCart, pokemon]);
  };

<<<<<<< HEAD
  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
=======

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };


  const handleCheckout = () => {
    setCart([]);

    if (cart.length > 0) {
      setHystoryCart(prevHistory => [...prevHistory, cart.length]);
      setCart([]);
    }
  };


>>>>>>> 1765c9ea1d39e22671efafdf39b9350750fa4bb7

  return (
    <AddToCartContext.Provider value={{ cart, addToCart, removeFromCart, handleCheckout, hystoryCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};
