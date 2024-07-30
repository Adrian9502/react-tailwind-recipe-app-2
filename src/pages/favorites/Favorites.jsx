import { useContext } from "react";
import { GlobalContext } from "../../components/context/GlobalState";
import Recipes from "../../components/context/Recipes";
export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoritesList.length > 0 ? (
          favoritesList.map((item, index) => (
            <Recipes item={item} key={index} />
          )) // Ensure each item has a unique key
        ) : (
          <div className="text-center font-semibold italic text-lg">
            No favorites added.
          </div>
        )}
      </div>
    </div>
  );
}
