"use client";

import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-center ">
    <div className="flex items-center bg-white px-4 py-2 w-[160px] justify-between ">
    <span className="text-xl  text-black">{quantity}</span>
    <div className="flex space-x-2">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-md disabled:bg-gray-300 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-md disabled:bg-gray-300 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        +
      </button>
    </div>
  </div>
  </div>


  );
}
