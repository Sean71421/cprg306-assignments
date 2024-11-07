"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            quantity,
            category,
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-slate-800 p-4 rounded-lg">
                <input
                    type="text"
                    placeholder="Item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 mb-2 text-black rounded-md"
                />
                <div className="flex justify-between gap-2 mb-2">
                    <div className="flex gap-2 items-center">
                        <input
                            type="number"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            required
                            className="w-16 p-2 text-black rounded-md"
                        />
                        <button 
                            type="button" 
                            onClick={() => setQuantity(Math.min(99, quantity + 1))}
                            className="bg-blue-500 text-white px-2 rounded-md"
                        >
                            +
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="bg-blue-500 text-white px-2 rounded-md"
                        >
                            -
                        </button>
                    </div>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 text-black rounded-md"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md"
                >
                    +
                </button>
            </form>
        </div>
    );
}