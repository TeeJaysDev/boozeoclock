"use client";
import { useEffect, useState } from "react";
import CocktailCard from "../components/main/CocktailCard";

const GetCocktails = () => {
    const [cocktailsList, setCocktailsList] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        };

        fetch("https://cocktails.solvro.pl/api/v1/cocktails?page=1&perPage=15", options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setCocktailsList(json.cocktails || []);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            {cocktailsList?.map((cocktail) => {
                return (
                    <CocktailCard
                        key={cocktail.id}
                        img={img}
                        category={cocktail.category}
                        name={cocktail.name}
                    />
                )
            })}
        </>
    );
};

export default GetCocktails;