import Image from "next/image";
import Button from "../Button";
import heart from "../../../public/icons8-heart-white.png";
import "../../styles/Button.css";
import "../../styles/cocktails/CocktailPage.css";

interface CocktailPageProps {
  id: string;
  img: string;
  category: string;
  name: string;
  ingredients: { measure: string; name: string }[];
  glass: string;
  recipe: string;
}

const CocktailPage: React.FC<CocktailPageProps> = ({
  img,
  category,
  name,
  ingredients,
  glass,
  recipe,
  
}) => {
  return (
    <div id="CocktailPage-div">
      <Image
        id="CocktailPage-Image-1"
        src={img}
        width={1000}
        height={1000}
        alt="cocktail image"
      />
      <div id="CocktailPage-section">
        <div id="CocktailPage-sameLine">
          <h4 id="CocktailPage-category">{category}</h4>
          <Image
            src={heart}
            width={37}
            height={37}
            alt="heart icon"
            id="CocktailPage-heartImage"
          />
        </div>
        <h2 id="CocktailPage-name">{name}</h2>
        <Image
          id="CocktailPage-Image-2"
          src={img}
          width={1000}
          height={1000}
          alt="cocktail image"
        />
        <h3 className="CocktailPage-h3">Ingredients</h3>
        <ul id="CocktailPage-ul">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="CocktailPage-li CocktailPage-p">
              {ingredient.measure} {ingredient.name}
            </li>
          ))}
        </ul>
        <h3 className="CocktailPage-h3">Glass</h3>
        <p className="CocktailPage-p">{glass}</p>
        <h3 className="CocktailPage-h3">Recipe</h3>
        <p className="CocktailPage-p">{recipe}</p>
        <Button url="/" id="" message="Back" />
      </div>
    </div>
  );
};

export default CocktailPage;