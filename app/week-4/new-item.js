'use client';

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto bg-white rounded-lg p-4">
      <button 
        onClick={decrementQuantity}
        className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold"
      >
        -
      </button>
      <span className="text-2xl font-bold text-black">{quantity}</span>
      <button 
        onClick={incrementQuantity}
        className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold"
      >
        +
      </button>
    </div>
  );
}