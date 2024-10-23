import GetCocktails from "../../api/GetCocktails";
import Pagination from "./Pagination";
import "../../styles/landingpage/LandingPage.css";

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
