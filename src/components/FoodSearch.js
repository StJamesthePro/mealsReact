import React from "react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const FoodSearch = (props) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const apiKey = 'c82a5b7da8msh8e67e586999ae02p111427jsn2f533024e9d2';
        const url = `https://themealdb.p.rapidapi.com/filter.php?i=${props.ingredient}&key=${apiKey}`;

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
    }, [meals]);


    return (
        <>
            <div id="FoodItemNameContainer">
                <h1 id="FoodSelect">Yummy</h1>
                <ul>
                    {meals.map(meal => (
                        <>
                            <li id="FoodItemName" key={meal.idMeal}>{meal.strMeal}</li>

                            <Link><img src={meal.strMealThumb} height={'150vh'} /></Link>
                        </>
                    ))}
                </ul>
            </div>

        </>
    )


}
export default FoodSearch