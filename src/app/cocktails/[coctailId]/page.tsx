import CocktailPage from "../../../components/cocktails/CocktailPage"

interface CocktailPageProps {
  params: {
    coctailId: string;
  };
}

const Cocktails: React.FC<CocktailPageProps> = ({ params }) => {
  return (
    <main>
      <CocktailPage />
    </main>
  );
};

export default Cocktails;