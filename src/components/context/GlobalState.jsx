import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("Steak");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  const navigate = useNavigate();
  // Function to fetch recipes based on search parameter
  async function fetchRecipes(query) {
    setLoading(true); // Start loading
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes); // Set the recipes correctly
        navigate("/");
      } else {
        setRecipeList([]); // Clear recipeList if no recipes are found
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false); // Stop loading in all cases
    }
  }

  // Fetch recipes based on the initial searchParam when the component mounts
  useEffect(() => {
    fetchRecipes(searchParam);
  }, [searchParam]); // Dependency array ensures it runs on initial load and when searchParam changes

  function handleSubmit(event) {
    event.preventDefault();
    fetchRecipes(searchParam); // Fetch recipes based on the current searchParam
    setSearchParam(""); // Clear the search parameter
  }

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoriteList = [...favoritesList];
    const index = cpyFavoriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavoriteList.push(getCurrentItem);
    } else {
      cpyFavoriteList.splice(index);
    }
    setFavoritesList(cpyFavoriteList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
