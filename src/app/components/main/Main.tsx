import React from "react";
import GetCocktails from "../../API/GetCocktails";
import Pagination from "../main/Pagination";
import "../../styles/main/Main.css";

const Main: React.FC = () => {
  return (
    <>
      <h1 id="Main-h1">Home</h1>
      <div id="Main-div">
        <GetCocktails />
      </div>
      <Pagination />
    </>
  );
};

export default Main;
