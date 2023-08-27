import React from "react";

const recipeDisplay = recipes
  .filter((recipe, index) => {
    let title = recipe.recipe_name.toLowerCase();
    let searchParams = search.toLowerCase();
    return title.includes(searchParams);
  })
  .map((recipe, index) => {
    return <RecipeCard recipe={recipe} />;
  });

export default recipeDisplay;
