import { useEffect, useState } from "react";

import RecipeCard from "../newRecipeComponents/RecipeCard";
import axios from "axios";
import React from "react";
import AdBanner from "./AdBanner";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipeCard recipes={recipes}/>
    </div>
  );
};

export default HomeScreen;
