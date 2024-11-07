"use client";
import { useState } from 'react';
import Item from './item';


export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === 'category ') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });


    return (
        <div>
            <div className="flex gap-4 mb-4">
                <span>Sort by:</span>
                <button
                    onClick={() => setSortBy('name')}
                    className={`${
                        sortBy === 'name' 
                            ? 'bg-orange-500' 
                            : 'bg-orange-700'
                    } p-1 px-2 rounded`}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className={`${
                        sortBy === 'category' 
                            ? 'bg-orange-500' 
                            : 'bg-orange-700'
                    } p-1 px-2 rounded`}
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
                    />
                ))}
            </ul>
        </div>
    );
}