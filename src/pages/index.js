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
          border: "2px solid #2596be",
          borderRadius: "6px",
          fontSize: "1rem",
          marginLeft: "1rem",
          padding: "0.5rem 1rem",
          color: "#2596be",
          width: "37.5%",
          outline: "none",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          transition: "border-color 0.3s ease-in-out",
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
