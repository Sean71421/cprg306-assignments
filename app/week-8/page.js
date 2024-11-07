"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanName = item.name.split(",")[0].trim().toLowerCase();
        const emojiRegex = /[\u{1F300}-\u{1F6FF}]/gu;
        const cleanedName = cleanName.replace(emojiRegex, '').trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="bg-slate-950 min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
            <div className="flex gap-8">
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}