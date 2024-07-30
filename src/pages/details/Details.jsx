import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context/GlobalState";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data?.data) {
          setRecipeDetailsData(data?.data);
        }
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
      }
    }
    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  if (!recipeDetailsData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto p-3">
      <div className="bg-slate-300 rounded-lg shadow-md grid place-items-center grid-cols-1 lg:grid-cols-2  p-9">
        {/* Image Section */}
        <div className=" lg:mb-0 lg:mr-6 flex flex-col items-center ">
          <h1
            className="text-xl sm:text-2xl font-bold md:mb-0 text-center lg:text-3xl italic mb-2 text-gray-800"
            dangerouslySetInnerHTML={{ __html: recipeDetailsData.recipe.title }}
          />
          <h2 className="text-xl text-center sm:text-lg text-gray-600 mb-4">
            by: {recipeDetailsData.recipe.publisher}
          </h2>
          <img
            src={recipeDetailsData.recipe.image_url}
            alt={recipeDetailsData.recipe.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg "
          />{" "}
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData.recipe)}
            className="mx-auto p-3 px-8 rounded-lg text-sm uppercase font-semibold tracking-wider mt-3 inline-block shadow-md bg-orange-600 text-white"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData.recipe.id
            ) !== -1
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
        {/* Details Section */}
        <div className="lg:w-2/3 md:mt-1">
          <div className="prose pb-8">
            <h3 className="text-lg lg:text-2xl text-center font-semibold mb-2">
              Ingredients
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {recipeDetailsData.recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="text-base text-gray-700">
                  {ingredient.quantity}
                  {ingredient.unit} - {ingredient.description}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
