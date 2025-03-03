"use client";

import Item from "./item.js";
import itemsData from "./items.json";
import { useState } from "react";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  // Sort the items based on sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });

  return (
    <div>
      {/* Sorting Buttons at the Top */}
      <div className="mb-4 flex gap-6">
      <label htmlFor="sort" className="m-2">Sort by:</label>
      <button
          onClick={() => setSortBy("name")}
          className={`p-1 m-2 w-28 bg-[#C2410C] text-white  hover:bg-[#F97316] ${
            sortBy === "name" ? "bg-[#C2410C]" : ""
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`p-1 m-2 w-28 bg-[#C2410C] text-white  hover:bg-[#F97316] ${
            sortBy === "category" ? "bg-[#C2410C]" : ""
          }`}
        >
          Category
        </button>
      </div>

      {/* Item List */}
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>

     
    </div>
  );
};

export default ItemList;
