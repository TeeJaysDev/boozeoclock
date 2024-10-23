import Image from "next/image";
import Link from "next/link";
import heart from "../../../public/icons8-heart-white.png";
import "../../styles/landingpage/CocktailCard.css";

interface CocktailCardProps {
  id: string;
  img: string;
  category: string;
  name: string;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ id, img, category, name }) => {
  return (
    <div className="CocktailCard">
      <Image
        src={img}
        width="300"
        height="300"
        alt="cocktail image"
        className="CocktailCard-cocktailImage"
      />
      <div className="CocktailCard-sameLine">
        <h4 className="CocktailCard-category">
          {category !== "Punch / Party Drink" ? category : "Punch"}
        </h4>
        <Image
          src={heart}
          width="25"
          height="25"
          alt="heart icon"
          className="CocktailCard-heartImage"
        />
      </div>
      <h2 className="CocktailCard-name">{name}</h2>
      <Link href={`/cocktails/${id}`}>
        <button className="CocktailCard-button">View</button>
      </Link>
    </div>
  );
};

export default CocktailCard;