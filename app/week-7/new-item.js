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

    const handleIncrement = () => {
        if (quantity < 99) {
            setQuantity(quantity + 1 );
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="p-4 m-4 bg-slate-800 text-black max-w-sm w-full rounded-lg">
                <div className="mb-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Item name"
                        className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    />
                </div>

                <div className="flex justify-between gap-2 mb-4">
                    <div className="flex items-center">
                        <input
                            type="number"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            required
                            className="w-20 border-2 border-gray-300 p-2 rounded-lg font-sans"
                        />
                        <div className="flex flex-col ml-2">
                            <button 
                                type="button" 
                                onClick={handleIncrement}
                                className="bg-blue-500 text-white px-2 rounded-md mb-1 hover:bg-blue-600"
                            >
                                +
                            </button>
                            <button 
                                type="button" 
                                onClick={handleDecrement}
                                className="bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600"
                            >
                                -
                            </button>
                        </div>
                    </div>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
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
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                    +
                </button>
            </form>
        </div>
    );
}