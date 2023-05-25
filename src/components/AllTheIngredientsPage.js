import React from "react"
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FoodSearch from "./FoodSearch";
import Howto from "./HowTo";
// import Howto from "./HowTo";



const AllTheIngredientsPage = () => {
    const [meals, setIngredients] = useState([]);

    useEffect(() => {
        const apiKey = 'c82a5b7da8msh8e67e586999ae02p111427jsn2f533024e9d2';
        const url = `https://themealdb.p.rapidapi.com/list.php?i=list&key=${apiKey}`;

        fetch(url, {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
                "X-RapidAPI-Key": apiKey
            }
        })
            .then(response => response.json())
            .then(data => setIngredients(data.meals))
            .catch(error => console.error(error));
    }, []);



    return (

        <Router>
            <div>
                <h1 id="TheHeading">Main Ingredient</h1>
                <ul id="IngredientData">
                    {meals.map(ingredient => (
                        <Link to={`/meal/${ingredient.strIngredient}`}><li key={ingredient.idIngredient}>{ingredient.strIngredient}</li></Link>
                    ))}
                </ul>
            </div>
            <Routes>
                {
                    meals.map((meal) => (
                        <Route path={`/meal/${meal.strIngredient}`} element={<FoodSearch ingredient={meal.strIngredient} />} />

                    ))
                }
            </Routes>
        </Router>

    )


}
export default AllTheIngredientsPage