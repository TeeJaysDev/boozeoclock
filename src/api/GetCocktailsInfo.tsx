"use client";
import { useEffect, useState } from "react";
import CocktailPage from "../components/cocktails/CocktailPage";

interface Cocktail {
  id: number;
  imageUrl: string;
  category: string;
  name: string;
  glass: string;
  instructions: string;
}

const GetCocktailsInfo: React.FC = ({ id }) => {
  const [cocktailsList, setCocktailsList] = useState<Cocktail[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(
      `https://cocktails.solvro.pl/api/v1/cocktails/${id}`,
      options
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCocktailsList(json.data || []);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      {cocktailsList?.map((cocktail) => (
        <CocktailPage
          key={cocktail.id}
          id={cocktail.id}
          img={cocktail.imageUrl}
          category={cocktail.category}
          name={cocktail.name}
          glass={cocktail.glass}
          recipe={cocktail.instructions}
        />
      ))}
    </>
  );
};

export default GetCocktailsInfo;

