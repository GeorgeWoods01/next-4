import EditRecipe from "src/components/recipes/EditRecipe.js"
import { useRouter } from "next/router";
import { useState } from "react";

function EditRecipePage(props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function editRecipeHandler(recipeData) {
    setIsLoading(true);

    const response = await fetch(`/api/edit-recipe/${props.id}`, {
      method: "PUT",
      body: JSON.stringify(recipeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    setIsLoading(false);
    router.push("/");
  }

  return (
    <EditRecipe recipe={props.recipe} onEditRecipe={editRecipeHandler} />
  );
}

export async function getServerSideProps(context) {
  const { MongoClient, ObjectId } = require("mongodb");


  const client = await MongoClient.connect(process.env.API_KEY);
  const db = client.db();
  const recipesCollection = db.collection("recipes");

  const recipe = await recipesCollection.findOne({
    _id: new ObjectId(context.params.recipeId),
  });

  client.close();

  return {
    props: {
      recipe: {
        id: recipe._id.toString(),
        title: recipe.title,
        image: recipe.image,
        description: recipe.description,
        cuisine: recipe.cuisine,
        ingredients: recipe.ingredients,
      },
    },
  };
}

export default EditRecipePage;
