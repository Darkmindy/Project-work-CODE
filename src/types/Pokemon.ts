export type Pokemon = {
  id: number; // Identificativo numerico univoco del Pokémon
  name: string; // Nome del Pokémon
  description: string; // Descrizione del Pokémon (opzionale)
  category: string; // Categoria del Pokémon (opzionale)
  images: {
    small: string; // URL dell'immagine in formato ridotto del Pokémon
    large: string; // URL dell'immagine in formato grande del Pokémon
  };
  price: number; // Prezzo del Pokémon
  qty: number; // Quantità disponibile del Pokémon (opzionale)
  subtotal: number; // Subtotale del Pokémon (opzionale)
  rating: {
    rate: number; // Valutazione media del Pokémon
    count: number; // Numero totale di valutazioni del Pokémon
  };
};
