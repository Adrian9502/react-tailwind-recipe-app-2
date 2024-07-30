import { useContext } from "react";
import { GlobalContext } from "../../components/context/GlobalState";
import Recipes from "../../components/context/Recipes";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
      </div>
    );

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipeList.length > 0 ? (
          recipeList.map((item, index) => <Recipes item={item} key={index} />) // Ensure each item has a unique key
        ) : (
          <div>Search something..</div>
        )}
      </div>
    </div>
  );
}
