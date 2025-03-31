"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js"; 
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    if (!user) {
      setItems([]); 
      return;
    }
    loadItems();
  }, [user]);

  if (!user) {
    return (
      <div>
        <h1>Week 9 </h1>
        <p>Go away!</p>
      </div>
    );
  }

  const handleItemSelect = (itemName) => {
    // Remove emojis and clean text
    const cleanedItemName = itemName.split(",")[0].replace(/[^\w\s]/g, "").trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = async (newItem) => {
    if (!user) return; // Prevents errors if user is null
    const itemId = await addItem(user.uid, newItem);
    if (itemId) {
      setItems([...items, { id: itemId, ...newItem }]);
    }
  };

  return (
    <main className="bg-[#020617] text-white">
      <h1 className="text-4xl font-bold mb-0 p-2">Shopping List</h1>
      <p>{user.displayName}</p>
      
      <div className="flex mt-6 gap-2">
        <div className="flex flex-col space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
