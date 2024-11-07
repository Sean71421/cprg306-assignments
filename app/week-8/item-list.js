"use client";
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });


    return (
        <div className=" mt-8">
            <div className="flex gap-2 mb-4 items-center ">
                <span className="text-gray-400">Sort by:</span>
                <button
                    onClick={() => setSortBy('name')}
                    className={`px-4 py-2 rounded ${
                        sortBy === 'name' 
                            ? 'bg-orange-500' 
                            : 'bg-orange-800'
                    }`}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy(' category')}
                    className={`px-4 py-2 rounded ${
                        sortBy === 'category' 
                            ? 'bg-orange-500' 
                            : 'bg-orange-800'
                    }`}
                >
                    Category
                </button>
            </div>
            <ul>
                
                {sortedItems.map(item => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                ))}
            </ul>
       
        </div>
    );
}