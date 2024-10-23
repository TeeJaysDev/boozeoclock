

interface Cocktail {
  id: number;
  imageUrl: string;
  category: string;
  name: string;
}

const GetCocktailsInfo = async ({ id }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(
    `https://cocktails.solvro.pl/api/v1/cocktails/${id}`,
    options
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cocktails");
  }

  const data = await response.json();
  const cocktailsList: Cocktail[] = data.data || [];

  return (
    <>
    
      {/* {cocktailsList?.map((cocktail) => (
        <CocktailCard
          key={cocktail.id}
          id={cocktail.id}
          img={cocktail.imageUrl}
          category={cocktail.category}
          name={cocktail.name}
        />
      ))} */}
    </>
  );
};

export default GetCocktailsInfo;
