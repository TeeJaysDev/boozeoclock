import React from "react";
import Image from "next/image";
import heart from "../../assets/icons8-heart-white.png"
import "../../styles/main/CocktailCard.css";

const CocktailCard = ({ img, category, name }) => {
    return (
        <div className="CocktailCard">
            <Image src={img} width="225" height="225" alt="cocktail image" className="CocktailCard-cocktailImage" />
            <div className="CocktailCard-sameLine">
                <h4 className="CocktailCard-category">{category}</h4>
                <Image src={heart} width="25" height="25" alt="cocktail image" className="CocktailCard-heartImage" />
            </div>
            <h2 className="CocktailCard-name">{name}</h2>
        </div>
        
    );
}

export default CocktailCard;