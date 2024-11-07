"use client";
import { useState, useEffect } from " react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}


export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    async function loadMealIdeas() {
        if (ingredient) {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        } else {
             setMeals([]);
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
            {ingredient && (
                <p className="mb-4">Here are some meal ideas using {ingredient}:</p>
            )}
            <ul>
                {meals.map(( meal) => (
                    <li
                        key={meal.idMeal}
                        className="bg-slate-800 mb-2 p-4 rounded-lg"
                    >
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}