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
      <h1 className="text-4xl font-bold mb-0">Shopping List</h1>
      
      {/* Stack NewItem and ItemList */}
      <div className="flex flex-col items-start space-y-4 mt-4">
        <NewItem className="w-full" onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
