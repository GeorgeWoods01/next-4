import NewRecipe from "../components/recipes/NewRecipe";
import { useRouter } from "next/router";
import { useState } from "react";

function NewRecipePage() {
  const router = useRouter();
  async function addRecipeHandler(enteredRecipeData) {
    const response = await fetch("/api/new-recipe", {
      method: "POST",
      body: JSON.stringify(enteredRecipeData),
      headers: {
        "Content-Type": "application/json",
      },
    }); //fetching instead of from a url, from the route you created in the file and folder
    const data = await response.json();
    console.log(data);
    router.push("/"); //navigates away

    console.log(enteredRecipeData);
  }

  return <NewRecipe onAddRecipe={addRecipeHandler} />;
}

export default NewRecipePage;
