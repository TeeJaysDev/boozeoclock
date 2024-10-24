import Image from "next/image";
import Button from "../Button";
import heart from "../../../public/icons8-heart-white.png";
import "../../styles/Button.css";
import "../../styles/cocktails/CocktailPage.css";

interface CocktailPageProps {
  id: number;
  img: string;
  category: string;
  name: string;
  glass: string;
  recipe: string;
}

const CocktailPage: React.FC<CocktailPageProps> = ({
  img,
  category,
  name,
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
          src="https://cocktails.solvro.pl/images/cocktails/negroni.png"
          width={1000}
          height={1000}
          alt="cocktail image"
        />
        <h3 className="CocktailPage-h3">Ingredients</h3>
        <ul id="CocktailPage-ul">
          <li className="CocktailPage-li CocktailPage-p">1oz vodka</li>
          <li className="CocktailPage-li CocktailPage-p">2.5oz rum</li>
          <li className="CocktailPage-li CocktailPage-p">1/2oz lemon</li>
        </ul>
        <h3 className="CocktailPage-h3">Glass</h3>
        <p className="CocktailPage-p">{glass}</p>
        <h3 className="CocktailPage-h3">Recipe</h3>
        <p className="CocktailPage-p">{recipe}</p>
        <Button url="/" message="Back" />
      </div>
    </div>
  );
};

export default CocktailPage;