"use client";
import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');
    const [groupedByCategory, setGroupedByCategory] = useState(false);


    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare( b.name);
        }
        if (sortBy === 'category') {
            return a.category.localeCompare(b.category );
        }
    });

    const groupedItems = items.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    const sortedCategories = Object.keys(groupedItems).sort();
    sortedCategories.forEach(category => {
        groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
    });

    return (
        <div>
             <div className="flex gap-4 mb-4">
                <span className="text-white">Sort by:</span>
                <button
                    onClick={() => {
                        setSortBy('name');
                        setGroupedByCategory(false);
                    }}
                    className={`${
                        sortBy === 'name' && !groupedByCategory 
                            ? 'bg-orange-500' 
                            : 'bg-orange-700'
                    } p-1 px-2 rounded`}
                >

                    name
                </button>
                <button
                    onClick={() => {
                        setSortBy('category');
                        setGroupedByCategory(false);
                    }}
                    className={`${
                        sortBy === 'category' && !groupedByCategory 
                            ? 'bg-orange-500' 
                            : 'bg-orange-700'
                    } p-1 px-2 rounded`}
                >

                    
                    Category
                </button>
                <button
                    onClick={() => setGroupedByCategory(true)}
                    className={`${
                        groupedByCategory 
                            ? 'bg-orange-500' 
                            : 'bg-orange-700'
                    } p-1 px-2 rounded`}
                >
                    Grouped Category
                </button>
            </div>

            {groupedByCategory ? (
                <div>
                    {sortedCategories.map(category => (
                        <div key={category} className="mb-4">
                            <h2 className=" text-xl font-bold capitalize mb-2">
                                {category}
                            </h2>
                            <ul>
                                {groupedItems[category].map(item => (
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
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
            )}
        </div>
    );
}