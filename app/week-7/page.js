"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js"; 
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // Correctly updating state with new item
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white p-6">
      <h1 className="text-4xl font-bold  mb-6 ">Shopping List</h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}
