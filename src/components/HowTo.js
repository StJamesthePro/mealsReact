import React from "react"
import { useEffect, useState } from "react";
import AllTheIngredientsPage from "./AllTheIngredientsPage";
import FoodSearch from "./FoodSearch";



const Howto = (props) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const apiKey = 'c82a5b7da8msh8e67e586999ae02p111427jsn2f533024e9d2';
        const url = `https://themealdb.p.rapidapi.com/lookup.php?i=${props.id}&key=${apiKey}`;
        fetch(url, {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
                "X-RapidAPI-Key": apiKey
            }
        })
            .then(response => response.json())
            .then(data => setMeals(data.meals))
            .catch(error => console.error(error));
        console.log(meals)
    }, [meals]);


    return (
        <>
            <div>
                <ul>
                    {meals.map(meal => (
                        <>
                            <li id="FoodItemName" key={meal.idMeal}>{meal.strInstructions}</li>
                        </>
                    ))}
                </ul>
            </div>

        </>
    )


}
export default Howto