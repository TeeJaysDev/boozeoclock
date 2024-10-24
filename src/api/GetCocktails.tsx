"use client";
import { useEffect, useState } from "react";
import CocktailCard from "../components/landingpage/CocktailCard";

interface Cocktail {
  id: number;
  imageUrl: string;
  category: string;
  name: string;
}

const GetCocktails: React.FC = () => {
  const [cocktailsList, setCocktailsList] = useState<Cocktail[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(
      `https://cocktails.solvro.pl/api/v1/cocktails/?page=1&perPage=12`,
      options
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCocktailsList(json.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {cocktailsList?.map((cocktail) => (
        <CocktailCard
          key={cocktail.id}
          id={cocktail.id.toString()}
          img={cocktail.imageUrl}
          category={cocktail.category}
          name={cocktail.name}
        />
      ))}
    </>
  );
};

export default GetCocktails;
