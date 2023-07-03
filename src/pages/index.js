import RecipeList from "../components/recipes/RecipeList";
import { MongoClient } from "mongodb";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [query, setQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(props.recipes);

  useEffect(() => {
    const filtered = props.recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [query, props.recipes]);

  return (
    <>
      <input
        type="text"
        placeholder="Search recipes or cuisines"
        onChange={(e) => setQuery(e.target.value)}
        style={{
          borderColor: "#be2596",
          borderRadius: "6px",
          fontSize: "1.5rem",
          color: "#2596be",
        }}
      />
      <RecipeList recipes={filteredRecipes} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const recipesCollection = db.collection("recipes");

  const recipes = await recipesCollection.find().toArray();

  client.close();

  return {
    props: {
      recipes: recipes.map((recipe) => ({
        title: recipe.title,
        image: recipe.image,
        cuisine: recipe.cuisine,
        id: recipe._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
