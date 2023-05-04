import RecipeList from "../components/recipes/RecipeList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [query, setQuery] = useState("");
  const [fileteredRecipes, setFilteredRecipes] = useState(props.recipes);
  useEffect(() => {
    const filtered = props.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [query, props.recipes]);
  return (
    <>
      <input
        type="text"
        placeholder="Search recipes"
        onChange={(e) => setQuery(e.target.value)}
        style={{
          borderColor: "pink",
          borderRadius: "6px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          fontSize: "1.5rem",
          color:"black"
        }}
      />
      <RecipeList recipes={fileteredRecipes} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.API_KEY);
  const db = client.db();
  const recipesCollection = db.collection("recipes"); //connect to db

  const recipes = await recipesCollection.find().toArray(); //find all documents in collection and make an array.

  client.close();

  return {
    props: {
      recipes: recipes.map((recipe) => ({
        title: recipe.title,
        image: recipe.image,
        cuisine: recipe.cuisine,
        description: recipe.description,
        id: recipe._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
