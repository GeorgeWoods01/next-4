import { useState, useEffect } from "react";
import RecipeList from "../../components/recipes/RecipeList";
import Link from "next/link";

export default function CuisinePage({ recipes, cuisine }) {
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const filtered = recipes?.filter((recipe) => recipe.cuisine === cuisine);
    setFilteredRecipes(filtered);
  }, [cuisine, recipes]);

  return (
    <>
      <h1>{cuisine} Recipes</h1>
      <Link href="/">Go back to Home</Link>
      <RecipeList recipes={filteredRecipes} />
    </>
  );
}
