"use client";
import { useState, useEffect } from "react";
import CocktailPage from "../../components/cocktails/CocktailPage";

interface Ingredient {
  id: number;
  name: string;
  description: string | null;
  alcohol: boolean;
  type: string | null;
  percentage: number | null;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  measure: string;
}

interface Cocktail {
  id: number;
  name: string;
  category: string;
  glass: string;
  instructions: string;
  imageUrl: string;
  alcoholic: boolean;
  createdAt: string;
  updatedAt: string;
  ingredients: Ingredient[];
}

interface SearchParams {
  searchParams: {
    id: string;
  };
}

const Cocktails: React.FC<SearchParams> = ({ searchParams }) => {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(
      `https://cocktails.solvro.pl/api/v1/cocktails/${searchParams.id}`,
      options
    )
      .then((response) => response.json())
      .then((json) => {
        setCocktail(json.data || null); // Assuming `json.data` is a single cocktail object
      })
      .catch((err) => console.error(err));
  }, [searchParams.id]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <CocktailPage
        key={cocktail.id.toString()}
        id={cocktail.id.toString()}
        img={cocktail.imageUrl}
        category={cocktail.category}
        name={cocktail.name}
        glass={cocktail.glass}
        recipe={cocktail.instructions}
        ingredients={cocktail.ingredients.map((ingredient) => ({
          measure: ingredient.measure,
          name: ingredient.name,
        }))}
      />
    </main>
  );
};

export default Cocktails;
